import { Bus, Gamepad2, Dice5, Tv, Trash2, Smartphone } from 'lucide-react';
import { dumpster, garage_dumpster, posted_sign } from '../images';
import theLift from '../images/TheLiftWinterPark.jpg';
import FadeIn from '../components/FadeIn';

export default function Explore() {
  return (
    <div className="px-4 pt-6 pb-10">
      <div className="mb-5">
        <h1 className="text-2xl font-bold text-text-primary md:text-3xl">Explore</h1>
        <p className="text-text-secondary text-sm md:text-base">
          Local transit, entertainment &amp; more
        </p>
      </div>

      {/* Transit + Entertainment side by side on desktop */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 mb-3">

      {/* Transit Card */}
      <FadeIn>
      <div className="bg-warm-surface rounded-2xl shadow-sm overflow-hidden h-full">
        <img
          src={theLift}
          alt="The Lift Winter Park"
          className="w-full h-36 object-cover"
        />
        <div className="p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-amber/10 w-9 h-9 flex items-center justify-center rounded-lg">
              <Bus className="text-amber w-4.5 h-4.5" />
            </div>
            <h2 className="font-bold text-text-primary">
              The Lift — Free Local Transit
            </h2>
          </div>
          <p className="text-sm text-text-secondary leading-relaxed mb-3">
            Enjoy free transit year-round to Winter Park Resort, Downtown Winter
            Park, Fraser, and Granby. The bus stop is just outside, down the
            hill.
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm text-text-secondary">Get the app:</span>
            <a
              href="https://apps.apple.com/us/app/the-lift-rider/id1673600268"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-slate-brand text-white rounded-lg px-3 py-1.5 text-xs font-medium"
            >
              <Smartphone className="w-3.5 h-3.5" />
              iOS
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.theliftwp.rider"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-sage text-white rounded-lg px-3 py-1.5 text-xs font-medium"
            >
              <Smartphone className="w-3.5 h-3.5" />
              Android
            </a>
          </div>
        </div>
      </div>
      </FadeIn>

      {/* Entertainment Card */}
      <FadeIn delay={0.08}>
      <div className="bg-warm-surface rounded-2xl shadow-sm p-5 h-full">
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-sage/10 w-9 h-9 flex items-center justify-center rounded-lg">
            <Gamepad2 className="text-sage w-4.5 h-4.5" />
          </div>
          <h2 className="font-bold text-text-primary">Entertainment</h2>
        </div>
        <div className="space-y-3">
          <div className="flex items-start gap-2.5">
            <Dice5 className="w-4 h-4 text-text-tertiary mt-0.5 shrink-0" />
            <p className="text-sm text-text-secondary leading-relaxed">
              Board games are on the shelf to the left of the fireplace,
              including games for kids.
            </p>
          </div>
          <div className="flex items-start gap-2.5">
            <Tv className="w-4 h-4 text-text-tertiary mt-0.5 shrink-0" />
            <p className="text-sm text-text-secondary leading-relaxed">
              Cable TV is available in the living room and bedrooms.
            </p>
          </div>
        </div>
      </div>
      </FadeIn>

      </div>{/* end grid */}

      {/* Trash & Recycling Card */}
      <FadeIn delay={0.12}>
      <div className="bg-warm-surface rounded-2xl shadow-sm p-5 mb-3">
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-amber/10 w-9 h-9 flex items-center justify-center rounded-lg">
            <Trash2 className="text-amber w-4.5 h-4.5" />
          </div>
          <h2 className="font-bold text-text-primary">Trash &amp; Recycling</h2>
        </div>
        <p className="text-sm text-text-secondary leading-relaxed">
          Two dumpsters in the parking lot — one for trash, one for recycling
          (yellow lid).
        </p>
        <img
          src={dumpster}
          alt="Parking lot dumpsters"
          className="rounded-xl w-full mt-3"
          loading="lazy"
        />
        <ul className="space-y-2 text-sm text-text-secondary leading-relaxed mt-3">
          {[
            'Shared with Winter Park Station tenants',
            'Break down all boxes before recycling',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-text-tertiary" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-sm text-text-secondary leading-relaxed mt-3">
          Two bins in the garage for household trash. Must be emptied daily into
          the main dumpster.
        </p>
        <img
          src={garage_dumpster}
          alt="Garage trash bins"
          className="rounded-xl w-full mt-3"
          loading="lazy"
        />
        <ul className="space-y-2 text-sm text-text-secondary leading-relaxed mt-3">
          {[
            "Don't pile trash on the floor by bins",
            'Wildlife is very active in the mountains!',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-text-tertiary" />
              {item}
            </li>
          ))}
        </ul>
        <img
          src={posted_sign}
          alt="Posted wildlife sign"
          className="rounded-xl max-w-60 mx-auto mt-3"
          loading="lazy"
        />
      </div>
      </FadeIn>
    </div>
  );
}
