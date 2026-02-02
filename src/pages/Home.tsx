import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ClipboardCheck, Bus, Compass } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { moose } from '../images';
import FadeIn from '../components/FadeIn';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <div className="space-y-6 pt-4 pb-6">
      {/* Hero Section with parallax */}
      <div ref={heroRef} className="mx-4 overflow-hidden rounded-2xl">
        <div className="relative h-70 md:h-85">
          <motion.img
            src={moose}
            alt="Mountain retreat in Winter Park, Colorado"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ y: heroY, scale: heroScale }}
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-dark via-slate-dark/60 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 md:p-8">
            <h1 className="text-2xl font-bold leading-tight text-white md:text-3xl">
              Welcome to our
              <br />
              <span className="bg-linear-to-r from-white via-amber-light to-white bg-clip-text text-transparent">
                Mountain Retreat
              </span>
            </h1>
            <p className="mt-1.5 text-sm text-white/75 md:text-base">
              Your guide to a great stay in Winter Park, Colorado
            </p>
          </div>
        </div>
      </div>

      {/* Bento Quick Access Grid */}
      <FadeIn className="px-4">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-text-tertiary">
          Quick Access
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {/* House Guide — large card */}
          <Link
            to={`${BASE}/guide`}
            className="col-span-2 flex items-center gap-4 rounded-xl bg-linear-to-br from-slate-brand to-slate-light p-5 shadow-sm transition-all active:scale-[0.98] hover:shadow-md sm:col-span-2"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
              <BookOpen size={24} className="text-white" strokeWidth={2} />
            </div>
            <div>
              <p className="text-base font-bold text-white">House Guide</p>
              <p className="text-sm text-white/70">Rules, kitchen, fireplace & more</p>
            </div>
          </Link>

          {/* Check Out — large card */}
          <Link
            to={`${BASE}/check-out`}
            className="col-span-2 flex items-center gap-4 rounded-xl bg-linear-to-br from-amber to-amber-light p-5 shadow-sm transition-all active:scale-[0.98] hover:shadow-md sm:col-span-2"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
              <ClipboardCheck size={24} className="text-white" strokeWidth={2} />
            </div>
            <div>
              <p className="text-base font-bold text-white">Check Out</p>
              <p className="text-sm text-white/70">Interactive departure checklist</p>
            </div>
          </Link>

          {/* Getting Around — small card */}
          <Link
            to={`${BASE}/explore`}
            className="flex flex-col gap-3 rounded-xl bg-warm-surface p-4 shadow-sm transition-all active:scale-[0.98] hover:shadow-md sm:col-span-2 sm:flex-row sm:items-center sm:gap-4"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-brand/15">
              <Bus size={20} className="text-slate-brand" strokeWidth={2} />
            </div>
            <div>
              <p className="text-sm font-semibold text-text-primary">Getting Around</p>
              <p className="mt-0.5 text-xs text-text-secondary">Free local transit</p>
            </div>
          </Link>

          {/* Explore — small card */}
          <Link
            to={`${BASE}/explore`}
            className="flex flex-col gap-3 rounded-xl bg-warm-surface p-4 shadow-sm transition-all active:scale-[0.98] hover:shadow-md sm:col-span-2 sm:flex-row sm:items-center sm:gap-4"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage/15">
              <Compass size={20} className="text-sage" strokeWidth={2} />
            </div>
            <div>
              <p className="text-sm font-semibold text-text-primary">Explore</p>
              <p className="mt-0.5 text-xs text-text-secondary">Entertainment & info</p>
            </div>
          </Link>
        </div>
      </FadeIn>

      {/* Welcome Message */}
      <FadeIn className="mx-4 rounded-xl bg-warm-surface p-5 shadow-sm md:p-6">
        <p className="text-sm leading-relaxed text-text-secondary md:text-base">
          We are thrilled that you have chosen our mountain retreat for your
          getaway! Whether you are here for world-class skiing, mountain biking,
          scenic hiking, or just to relax — we hope your stay is everything you
          envisioned.
        </p>
        <p className="mt-3 text-xs leading-relaxed text-text-tertiary md:text-sm">
          Colorado is our permanent home and Grand County is our favorite place
          to be. Enjoy!
        </p>
      </FadeIn>
    </div>
  );
}
