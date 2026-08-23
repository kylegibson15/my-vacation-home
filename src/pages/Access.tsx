import { FormEvent, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import {
  Lock,
  LockOpen,
  WashingMachine,
  Waves,
  Wifi,
  KeyRound,
  Copy,
  Check,
  RefreshCw,
  Car,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { Card, IconBadge, Kicker, PageHeader } from '../components/ui';
import { BUILDING, doorsLockedNow } from '../lib/building';
import {
  forgetGuestWord,
  recallGuestWord,
  rememberGuestWord,
  unlockSecrets,
  type Secrets,
} from '../lib/secrets';

const codeIcons: Record<string, LucideIcon> = {
  laundry: WashingMachine,
  hottub: Waves,
};

export default function Access() {
  const [secrets, setSecrets] = useState<Secrets | null>(null);
  const [checking, setChecking] = useState(true);

  // Try a remembered guest word on first load.
  useEffect(() => {
    const saved = recallGuestWord();
    if (!saved) {
      setChecking(false);
      return;
    }
    unlockSecrets(saved).then((s) => {
      if (!s) forgetGuestWord();
      setSecrets(s);
      setChecking(false);
    });
  }, []);

  const lock = () => {
    forgetGuestWord();
    setSecrets(null);
  };

  return (
    <div className="pb-8">
      <PageHeader kicker="Guests only" title="Access & codes" />
      {checking ? null : secrets ? (
        <Unlocked secrets={secrets} onLock={lock} />
      ) : (
        <Gate onUnlock={setSecrets} />
      )}
    </div>
  );
}

/* ---------- Locked state ---------- */

function Gate({ onUnlock }: { onUnlock: (s: Secrets) => void }) {
  const [word, setWord] = useState('');
  const [error, setError] = useState(false);
  const [busy, setBusy] = useState(false);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true);
    const s = await unlockSecrets(word);
    setBusy(false);
    if (s) {
      rememberGuestWord(word);
      onUnlock(s);
    } else {
      setError(true);
    }
  };

  return (
    <div className="flex flex-col items-center px-8 pt-16 text-center">
      <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border border-line bg-card shadow-[0_10px_30px_rgba(31,58,46,0.12)]">
        <Lock className="h-[30px] w-[30px] text-pine" strokeWidth={1.8} />
      </div>
      <h2 className="mt-5 font-serif text-[26px] text-pine">Guests only</h2>
      <p className="mt-2 text-sm leading-relaxed text-stone">
        Enter your <strong className="text-ink">unit number and letter</strong> (it's on your
        door and in your booking) to see door codes, Wi-Fi, and key locations.
      </p>

      <form onSubmit={submit} className="mt-6 flex w-full flex-col gap-3">
        <input
          type="text"
          autoComplete="off"
          autoCapitalize="none"
          value={word}
          onChange={(e) => {
            setWord(e.target.value);
            setError(false);
          }}
          placeholder="Unit number, e.g. 101B"
          aria-label="Unit number and letter"
          className={`h-[52px] rounded-[14px] border-[1.5px] bg-card px-4 text-base tracking-wide text-ink outline-none transition-colors placeholder:text-ash focus:border-pine ${
            error ? 'border-cedar' : 'border-line'
          }`}
        />
        <button
          type="submit"
          disabled={busy || !word.trim()}
          className="h-[52px] rounded-[14px] bg-cedar text-[15px] font-bold text-card transition-all active:scale-[0.98] disabled:opacity-50"
        >
          {busy ? 'Checking…' : 'Unlock'}
        </button>
      </form>

      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-3 text-sm font-semibold text-cedar"
          >
            That's not quite it — use the unit number and letter, like 101B.
          </motion.p>
        )}
      </AnimatePresence>

      <p className="mt-5 text-[12.5px] leading-relaxed text-ash">
        Can't find it? Message your host and we'll send it right over.
      </p>
    </div>
  );
}

/* ---------- Unlocked state ---------- */

function Unlocked({ secrets, onLock }: { secrets: Secrets; onLock: () => void }) {
  const locked = doorsLockedNow();

  return (
    <>
      {/* Building hours status */}
      <FadeIn className="relative mx-5 -mt-3.5">
        <Card raised className="p-4.5">
          <div className="flex items-center gap-2.5">
            <span
              className={`h-2.5 w-2.5 shrink-0 rounded-full ${
                locked
                  ? 'bg-cedar shadow-[0_0_0_4px_rgba(181,104,58,0.18)]'
                  : 'bg-pine shadow-[0_0_0_4px_rgba(31,58,46,0.15)]'
              }`}
            />
            <p className="text-sm font-bold">
              {locked ? 'Building doors are locked right now' : 'Building doors are open right now'}
            </p>
          </div>
          <div className="mt-2.5 grid grid-cols-2 gap-2.5">
            <Stat label="Locks" value={BUILDING.lockLabel} />
            <Stat label="Unlocks" value={BUILDING.unlockLabel} />
          </div>
          <p className="mt-3 text-[13px] leading-relaxed text-stone">
            After hours, use the <strong className="text-ink">building key</strong> — it's hanging{' '}
            {BUILDING.keyLocation}. Please hang it back when you're in.
          </p>
        </Card>
      </FadeIn>

      {/* Codes */}
      <div className="px-5 pt-6">
        <Kicker className="mb-3">Door codes</Kicker>
        <div className="flex flex-col gap-3">
          {secrets.codes.map((c, i) => (
            <FadeIn key={c.id} delay={0.05 * i}>
              <Card className="flex items-center gap-3.5 p-4">
                <IconBadge icon={codeIcons[c.id] ?? KeyRound} />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold">{c.title}</p>
                  <p className="mt-0.5 text-xs text-stone">{c.detail}</p>
                </div>
                <CodeChip code={c.code} />
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Wi-Fi flip card */}
      <div className="px-5 pt-6">
        <Kicker className="mb-3">Wi-Fi</Kicker>
        <FadeIn>
          <WifiCard ssid={secrets.wifi.ssid} password={secrets.wifi.password} />
        </FadeIn>
      </div>

      {/* Parking */}
      <div className="px-5 pt-6">
        <Kicker className="mb-3">Parking</Kicker>
        <FadeIn>
          <Card className="flex gap-3.5 p-4">
            <IconBadge icon={Car} />
            <div className="space-y-2 text-[13.5px] leading-relaxed text-stone">
              <p>
                <strong className="text-ink">Under the building</strong> — garage clearance is{' '}
                <strong className="text-ink">6'8"</strong>. Unassigned; one car per unit, please.
              </p>
              <p>
                <strong className="text-ink">Behind the building</strong> — open lot for taller
                vehicles or a second car.
              </p>
              <p>
                <strong className="text-ink">Cooper Square</strong> (next door) — free parking
                garage with <strong className="text-ink">EV chargers</strong>.
              </p>
            </div>
          </Card>
        </FadeIn>
      </div>

      {/* Keys */}
      <div className="px-5 pt-6">
        <Kicker className="mb-3">Keys in the unit</Kicker>
        <FadeIn>
          <div className="flex flex-col gap-3.5 rounded-[18px] bg-pine p-4.5 text-paper">
            <KeyRow n="1">
              <strong>Building key</strong> — hook at the entrance of the condo. Opens the exterior
              doors after hours.
            </KeyRow>
            <KeyRow n="2">
              <strong>Storage locker #302</strong> — same hook. The locker is on this floor near the
              elevator; skis and boards go there.
            </KeyRow>
            <KeyRow n="3">
              <strong>Lockbox key</strong> — return it to the lockbox at check out.
            </KeyRow>
          </div>
        </FadeIn>
      </div>

      <div className="mt-5 flex flex-col items-center gap-2 px-5 text-center">
        <p className="text-xs leading-relaxed text-ash">
          Please don't share codes with anyone outside your party.
        </p>
        <button
          type="button"
          onClick={onLock}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone hover:text-ink"
        >
          <LockOpen size={12} /> Lock this page
        </button>
      </div>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-paper px-3 py-2.5">
      <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-stone">{label}</p>
      <p className="mt-0.5 font-serif text-xl text-pine">{value}</p>
    </div>
  );
}

function KeyRow({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <span className="w-5 shrink-0 font-serif text-lg text-ember">{n}</span>
      <p className="text-[13.5px] leading-relaxed">{children}</p>
    </div>
  );
}

function CodeChip({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard unavailable — the code is still visible
    }
  };
  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy code ${code}`}
      className="flex items-center gap-2 rounded-xl bg-paper px-3 py-2 font-mono text-[22px] font-bold tracking-[0.12em] text-pine transition-all active:scale-95"
    >
      {code}
      {copied ? (
        <Check size={14} className="text-pine" strokeWidth={3} />
      ) : (
        <Copy size={14} className="text-ash" />
      )}
    </button>
  );
}

function WifiCard({ ssid, password }: { ssid: string; password: string }) {
  const [flipped, setFlipped] = useState(false);
  const escape = (s: string) => s.replace(/([\\;,:"])/g, '\\$1');
  const payload = `WIFI:T:WPA;S:${escape(ssid)};P:${escape(password)};;`;

  return (
    <div className="flip-scene">
      <button
        type="button"
        onClick={() => setFlipped((f) => !f)}
        aria-label={flipped ? 'Show Wi-Fi QR code' : 'Show Wi-Fi password'}
        className={`flip-card block h-[212px] w-full text-left ${flipped ? 'is-flipped' : ''}`}
      >
        {/* Front: QR */}
        <Card className="flip-face flex items-center gap-4 p-4">
          <div className="flex h-[160px] w-[160px] shrink-0 items-center justify-center rounded-xl bg-white p-2.5">
            <QRCodeSVG value={payload} size={140} fgColor="#1F3A2E" bgColor="#FFFFFF" level="M" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <Wifi size={16} className="text-cedar" />
              <p className="text-sm font-bold">Scan to join</p>
            </div>
            <p className="mt-1 truncate text-xs text-stone">{ssid}</p>
            <p className="mt-3 text-[12.5px] leading-relaxed text-stone">
              Point your phone's camera at the code and tap the prompt.
            </p>
            <p className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-cedar">
              <RefreshCw size={12} /> Tap to see the password
            </p>
          </div>
        </Card>

        {/* Back: password */}
        <div className="flip-face back flex flex-col justify-center rounded-[18px] bg-pine p-5 text-paper">
          <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-paper/70">Network</p>
          <p className="mt-0.5 truncate font-serif text-xl">{ssid}</p>
          <p className="mt-4 text-[10.5px] font-bold uppercase tracking-[0.14em] text-paper/70">
            Password
          </p>
          <p className="mt-0.5 break-all font-mono text-lg font-bold tracking-wide">{password}</p>
          <p className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-ember">
            <RefreshCw size={12} /> Tap to flip back
          </p>
        </div>
      </button>
    </div>
  );
}
