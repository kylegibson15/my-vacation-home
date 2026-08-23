#!/usr/bin/env node
/**
 * Encrypts the guest-only content (door codes, Wi-Fi) with the guest word so the
 * public repo and JS bundle only ever contain ciphertext.
 *
 * Usage:
 *   node scripts/encrypt-secrets.mjs <guest-word> [path/to/secrets.json]
 *
 * Reads secrets.json (default: ./secrets.json — git-ignored), writes
 * src/data/secrets.enc.json. The browser derives the same key with PBKDF2 and
 * decrypts with AES-GCM (see src/lib/secrets.ts).
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { webcrypto as crypto } from 'node:crypto';

const [, , guestWord, input = 'secrets.json'] = process.argv;
if (!guestWord) {
  console.error('Usage: node scripts/encrypt-secrets.mjs <guest-word> [secrets.json]');
  process.exit(1);
}

const ITERATIONS = 150_000;
const enc = new TextEncoder();

const plaintext = readFileSync(input, 'utf8');
JSON.parse(plaintext); // fail early on invalid JSON

const salt = crypto.getRandomValues(new Uint8Array(16));
const iv = crypto.getRandomValues(new Uint8Array(12));

const baseKey = await crypto.subtle.importKey('raw', enc.encode(normalize(guestWord)), 'PBKDF2', false, [
  'deriveKey',
]);
const key = await crypto.subtle.deriveKey(
  { name: 'PBKDF2', salt, iterations: ITERATIONS, hash: 'SHA-256' },
  baseKey,
  { name: 'AES-GCM', length: 256 },
  false,
  ['encrypt'],
);
const ciphertext = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, enc.encode(plaintext));

const out = {
  v: 1,
  iterations: ITERATIONS,
  salt: b64(salt),
  iv: b64(iv),
  data: b64(new Uint8Array(ciphertext)),
};
writeFileSync('src/data/secrets.enc.json', JSON.stringify(out, null, 2) + '\n');
console.log('Wrote src/data/secrets.enc.json');

function b64(bytes) {
  return Buffer.from(bytes).toString('base64');
}
function normalize(word) {
  return word.trim().toLowerCase();
}
