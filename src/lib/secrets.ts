import encrypted from '../data/secrets.enc.json';

export interface AccessCode {
  id: string;
  title: string;
  detail: string;
  code: string;
}

export interface Secrets {
  codes: AccessCode[];
  wifi: { ssid: string; password: string };
}

const STORAGE_KEY = 'guest-word';

function b64ToBytes(s: string): Uint8Array<ArrayBuffer> {
  const bin = atob(s);
  const out = new Uint8Array(new ArrayBuffer(bin.length));
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

function normalize(word: string) {
  return word.trim().toLowerCase();
}

/** Returns the decrypted secrets, or null if the guest word is wrong. */
export async function unlockSecrets(guestWord: string): Promise<Secrets | null> {
  const word = normalize(guestWord);
  if (!word) return null;
  try {
    const enc = new TextEncoder();
    const baseKey = await crypto.subtle.importKey('raw', enc.encode(word), 'PBKDF2', false, [
      'deriveKey',
    ]);
    const key = await crypto.subtle.deriveKey(
      {
        name: 'PBKDF2',
        salt: b64ToBytes(encrypted.salt),
        iterations: encrypted.iterations,
        hash: 'SHA-256',
      },
      baseKey,
      { name: 'AES-GCM', length: 256 },
      false,
      ['decrypt'],
    );
    const plain = await crypto.subtle.decrypt(
      { name: 'AES-GCM', iv: b64ToBytes(encrypted.iv) },
      key,
      b64ToBytes(encrypted.data),
    );
    return JSON.parse(new TextDecoder().decode(plain)) as Secrets;
  } catch {
    return null; // wrong word → GCM auth fails
  }
}

export function rememberGuestWord(word: string) {
  try {
    localStorage.setItem(STORAGE_KEY, normalize(word));
  } catch {
    // ignore
  }
}

export function recallGuestWord(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

export function forgetGuestWord() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}
