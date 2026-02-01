import { Link } from 'react-router-dom';
import { BookOpen, ClipboardCheck, Bus, Compass } from 'lucide-react';
import { moose } from '../images';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

const quickAccessCards = [
  {
    title: 'House Guide',
    desc: 'Rules, kitchen & more',
    icon: BookOpen,
    to: `${BASE}/guide`,
    tintBg: 'bg-sage/15',
    tintText: 'text-sage',
  },
  {
    title: 'Check Out',
    desc: 'Departure checklist',
    icon: ClipboardCheck,
    to: `${BASE}/check-out`,
    tintBg: 'bg-amber/15',
    tintText: 'text-amber',
  },
  {
    title: 'Getting Around',
    desc: 'Free local transit',
    icon: Bus,
    to: `${BASE}/explore`,
    tintBg: 'bg-slate-brand/15',
    tintText: 'text-slate-brand',
  },
  {
    title: 'Explore',
    desc: 'Entertainment & info',
    icon: Compass,
    to: `${BASE}/explore`,
    tintBg: 'bg-sage/15',
    tintText: 'text-sage',
  },
];

export default function Home() {
  return (
    <div className="space-y-6 pt-4 pb-6">
      {/* Hero Section */}
      <div className="mx-4 overflow-hidden rounded-2xl">
        <div className="relative h-[280px]">
          <img
            src={moose}
            alt="Mountain retreat in Winter Park, Colorado"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-dark via-slate-dark/60 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5">
            <h1 className="text-2xl font-bold leading-tight text-white">
              Welcome to our
              <br />
              Mountain Retreat
            </h1>
            <p className="mt-1.5 text-sm text-white/75">
              Your guide to a great stay in Winter Park, Colorado
            </p>
          </div>
        </div>
      </div>

      {/* Quick Access Cards */}
      <div className="px-4">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-text-tertiary">
          Quick Access
        </p>
        <div className="grid grid-cols-2 gap-3">
          {quickAccessCards.map(({ title, desc, icon: Icon, to, tintBg, tintText }) => (
            <Link
              key={title}
              to={to}
              className="flex flex-col gap-3 rounded-xl bg-warm-surface p-4 shadow-sm active:scale-[0.98] transition-transform"
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full ${tintBg}`}
              >
                <Icon size={20} className={tintText} strokeWidth={2} />
              </div>
              <div>
                <p className="text-sm font-semibold text-text-primary">{title}</p>
                <p className="mt-0.5 text-xs text-text-secondary">{desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Welcome Message */}
      <div className="mx-4 rounded-xl bg-warm-surface p-5 shadow-sm">
        <p className="text-sm leading-relaxed text-text-secondary">
          We are thrilled that you have chosen our mountain retreat for your
          getaway! Whether you are here for world-class skiing, mountain biking,
          scenic hiking, or just to relax — we hope your stay is everything you
          envisioned.
        </p>
        <p className="mt-3 text-xs leading-relaxed text-text-tertiary">
          Colorado is our permanent home and Grand County is our favorite place
          to be. Enjoy!
        </p>
      </div>
    </div>
  );
}
