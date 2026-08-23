import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { KeyRound, BookOpen, ClipboardCheck, Compass, Lock, ChevronRight, Mountain } from 'lucide-react';
import { moose } from '../images';
import FadeIn from '../components/FadeIn';
import { Card, Kicker } from '../components/ui';
import { BUILDING } from '../lib/building';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <div className="pb-8">
      {/* Hero */}
      <div ref={heroRef} className="relative h-[400px] overflow-hidden bg-pine-deep md:h-[440px] md:rounded-t-3xl">
        <motion.img
          src={moose}
          alt="Moose near our condo in Winter Park, Colorado"
          className="absolute inset-0 h-full w-full object-cover opacity-90"
          style={{ y: heroY, scale: heroScale }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-pine-deep/15 via-transparent to-pine-deep/85" />
        <svg
          viewBox="0 0 390 120"
          preserveAspectRatio="none"
          className="absolute inset-x-0 -bottom-px h-[120px] w-full"
          aria-hidden
        >
          <path
            d="M0 90 L40 62 L70 78 L120 40 L160 66 L200 30 L240 58 L275 44 L310 70 L350 52 L390 80 L390 120 L0 120 Z"
            fill="#1F3A2E"
            opacity="0.85"
          />
          <path
            d="M0 105 L35 88 L75 98 L125 72 L170 92 L215 68 L260 90 L300 76 L345 96 L390 84 L390 120 L0 120 Z"
            className="fill-paper md:fill-card"
          />
        </svg>
        <div className="absolute inset-x-6 top-7 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.18em] text-paper/85">
          <span>Winter Park · Colorado</span>
          <span>9,052 ft</span>
        </div>
        <div className="absolute inset-x-6 bottom-28">
          <h1 className="font-serif text-[40px] leading-[1.02] text-paper md:text-5xl">
            Welcome to
            <br />
            the cabin.
          </h1>
          <p className="mt-2.5 text-[15px] leading-snug text-paper/80">
            Your guide to a great stay in our mountain retreat.
          </p>
        </div>
      </div>

      {/* Doors lock reminder */}
      <div className="relative mx-5 -mt-7">
        <Link to={`${BASE}/access`} className="block">
          <Card raised className="flex items-center gap-3.5 p-4 transition-all active:scale-[0.98]">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-pine">
              <Lock className="h-[22px] w-[22px] text-paper" strokeWidth={1.8} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-bold">Building doors lock at {BUILDING.lockLabel}</p>
              <p className="mt-0.5 text-[12.5px] text-stone">Codes &amp; after-hours keys are in Access.</p>
            </div>
            <ChevronRight size={18} className="text-cedar" />
          </Card>
        </Link>
      </div>

      {/* Start here */}
      <FadeIn className="px-5 pt-6">
        <Kicker className="mb-3">Start here</Kicker>
        <div className="grid grid-cols-2 gap-3">
          <Link
            to={`${BASE}/access`}
            className="col-span-2 flex items-center gap-3.5 rounded-[18px] bg-pine p-4.5 text-paper transition-all active:scale-[0.98]"
          >
            <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-paper/14">
              <KeyRound className="h-[22px] w-[22px]" strokeWidth={1.8} />
            </div>
            <div>
              <p className="font-serif text-xl">Access &amp; codes</p>
              <p className="mt-0.5 text-[13px] text-paper/75">Doors, laundry, hot tub, Wi-Fi, parking</p>
            </div>
          </Link>

          <Link to={`${BASE}/guide`} className="transition-all active:scale-[0.98]">
            <Card className="flex h-full flex-col gap-3 p-4">
              <BookOpen className="h-[22px] w-[22px] text-cedar" strokeWidth={1.8} />
              <div>
                <p className="text-[15px] font-bold">House guide</p>
                <p className="mt-0.5 text-[12.5px] text-stone">Kitchen, fireplace, rules</p>
              </div>
            </Card>
          </Link>

          <Link to={`${BASE}/check-out`} className="transition-all active:scale-[0.98]">
            <Card className="flex h-full flex-col gap-3 p-4">
              <ClipboardCheck className="h-[22px] w-[22px] text-cedar" strokeWidth={1.8} />
              <div>
                <p className="text-[15px] font-bold">Check out</p>
                <p className="mt-0.5 text-[12.5px] text-stone">Departure checklist</p>
              </div>
            </Card>
          </Link>

          <Link to={`${BASE}/explore`} className="col-span-2 transition-all active:scale-[0.98]">
            <Card className="flex items-center gap-3.5 p-4">
              <Compass className="h-[22px] w-[22px] shrink-0 text-cedar" strokeWidth={1.8} />
              <div>
                <p className="text-[15px] font-bold">Explore Winter Park</p>
                <p className="mt-0.5 text-[12.5px] text-stone">Free transit, eats, trails, hot springs</p>
              </div>
            </Card>
          </Link>
        </div>
      </FadeIn>

      {/* Welcome note */}
      <FadeIn className="mx-5 mt-6 border-y border-line px-1 py-5">
        <p className="font-serif text-[22px] leading-tight text-pine">
          &ldquo;Colorado is our permanent home and Grand County is our favorite place to be.&rdquo;
        </p>
        <p className="mt-3 text-[13.5px] leading-relaxed text-stone">
          Whether you're here for skiing, biking, hiking, or just to slow down — we hope your stay
          is everything you pictured. Enjoy!
        </p>
        <p className="mt-2.5 text-xs font-bold uppercase tracking-[0.14em] text-cedar">— Your hosts</p>
      </FadeIn>

      {/* Altitude tip */}
      <FadeIn className="mx-5 mt-5 flex items-start gap-3">
        <Mountain className="mt-0.5 h-5 w-5 shrink-0 text-pine" strokeWidth={1.8} />
        <p className="text-[13px] leading-relaxed text-stone">
          <strong className="text-ink">You're at 9,000 ft.</strong> Drink more water than feels
          necessary, take day one easy, and keep the sunscreen handy.
        </p>
      </FadeIn>
    </div>
  );
}
