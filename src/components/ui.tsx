import { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';

/** Deep-pine header band with a mountain silhouette, used on every inner page. */
export function PageHeader({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="relative overflow-hidden bg-pine px-6 pt-9 pb-7 md:rounded-t-3xl">
      <svg
        viewBox="0 0 390 80"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 h-20 w-full opacity-35"
        aria-hidden
      >
        <path
          d="M0 70 L50 40 L90 58 L140 22 L190 50 L240 18 L290 46 L340 30 L390 56 L390 80 L0 80 Z"
          fill="#142A21"
        />
      </svg>
      <div className="relative">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-paper/70">{kicker}</p>
        <h1 className="mt-1.5 font-serif text-[34px] leading-[1.05] text-paper md:text-4xl">
          {title}
        </h1>
      </div>
    </div>
  );
}

export function Kicker({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={`text-[11px] font-bold uppercase tracking-[0.18em] text-stone ${className}`}
    >
      {children}
    </p>
  );
}

export function Card({
  children,
  className = '',
  raised = false,
}: {
  children: ReactNode;
  className?: string;
  raised?: boolean;
}) {
  return (
    <div
      className={`rounded-[18px] border border-line bg-card ${
        raised ? 'shadow-[0_10px_30px_rgba(31,58,46,0.12)]' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function IconBadge({
  icon: Icon,
  tone = 'pine',
}: {
  icon: LucideIcon;
  tone?: 'pine' | 'cedar' | 'solid';
}) {
  const bg =
    tone === 'solid' ? 'bg-pine' : tone === 'cedar' ? 'bg-cedar/12' : 'bg-pine/8';
  const color = tone === 'solid' ? 'text-paper' : tone === 'cedar' ? 'text-cedar' : 'text-pine';
  return (
    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${bg}`}>
      <Icon className={`h-[22px] w-[22px] ${color}`} strokeWidth={1.8} />
    </div>
  );
}

export function Bullets({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2.5 text-[13.5px] leading-relaxed text-stone">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5">
          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-cedar" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
