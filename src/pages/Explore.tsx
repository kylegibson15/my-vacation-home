import { useState } from 'react';
import { Bus, Smartphone, Trash2 } from 'lucide-react';
import { dumpster, garage_dumpster, posted_sign } from '../images';
import theLift from '../images/TheLiftWinterPark.jpg';
import FadeIn from '../components/FadeIn';
import { Bullets, Card, IconBadge, Kicker, PageHeader } from '../components/ui';

type Season = 'winter' | 'summer';

const seasonal: Record<Season, { title: string; note: string }[]> = {
  winter: [
    { title: 'Winter Park Resort', note: '10 min on the Lift. [rental shop / ski-check tip]' },
    { title: 'Hot Sulphur Springs', note: '30 min west — soak after a ski day' },
    { title: 'Snowshoe & XC at Devil’s Thumb Ranch', note: '15 min north, rentals on site' },
    { title: 'Berthoud Pass', note: 'Check COtrip before driving; traction law applies on snow days' },
  ],
  summer: [
    { title: 'Trestle Bike Park', note: 'Lift-served downhill at the resort; rentals at the base' },
    { title: 'Fraser River Trail', note: 'Flat paved path from town to Fraser — great for a walk or ride' },
    { title: 'Monarch Lake loop', note: '4-mile hike, ~40 min drive; go early for parking' },
    { title: 'Hot Sulphur Springs', note: '30 min west — still great in summer' },
  ],
};

const picks = [
  { name: '[Restaurant name]', sub: '[why we love it] · downtown', tag: 'Dinner' },
  { name: '[Breakfast / coffee spot]', sub: '[one-line note]', tag: 'Coffee' },
  { name: 'Safeway, Fraser', sub: 'Closest full grocery · 5 min', tag: 'Grocery' },
  { name: '[Liquor store]', sub: '[one-line note]', tag: 'Liquor' },
  { name: '[Gear rental]', sub: 'Skis, bikes, snowshoes', tag: 'Gear' },
];

export default function Explore() {
  const [season, setSeason] = useState<Season>(() => {
    const m = new Date().getMonth();
    return m >= 4 && m <= 9 ? 'summer' : 'winter';
  });

  return (
    <div className="pb-8">
      <PageHeader kicker="Out & about" title="Explore Winter Park" />

      {/* Transit */}
      <FadeIn className="relative mx-5 -mt-3.5">
        <Card raised className="overflow-hidden">
          <img src={theLift} alt="The Lift bus in Winter Park" className="h-32 w-full object-cover" />
          <div className="flex gap-3.5 p-4">
            <IconBadge icon={Bus} tone="solid" />
            <div className="flex-1">
              <p className="text-sm font-bold">The Lift — free bus, all year</p>
              <p className="mt-1 text-[12.5px] leading-relaxed text-stone">
                The stop is just outside, down the hill. Runs to the resort, downtown Winter Park,
                Fraser, and Granby.
              </p>
              <div className="mt-2.5 flex flex-wrap gap-2">
                <a
                  href="https://apps.apple.com/us/app/the-lift-rider/id1673600268"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-cedar px-3 py-1.5 text-xs font-bold text-card"
                >
                  <Smartphone size={13} /> Rider app · iOS
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.theliftwp.rider"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-pine/8 px-3 py-1.5 text-xs font-bold text-pine"
                >
                  <Smartphone size={13} /> Android
                </a>
              </div>
            </div>
          </div>
        </Card>
      </FadeIn>

      {/* Season */}
      <FadeIn className="px-5 pt-6">
        <Kicker className="mb-2.5">This season</Kicker>
        <div className="flex gap-1 rounded-[14px] border border-line bg-card p-1">
          {(['winter', 'summer'] as Season[]).map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSeason(s)}
              className={`flex-1 rounded-[10px] py-2 text-[13px] font-bold capitalize transition-colors ${
                season === s ? 'bg-pine text-paper' : 'text-stone'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
        <Card className="mt-2.5 p-4">
          <Bullets
            items={seasonal[season].map((it) => (
              <>
                <strong className="text-ink">{it.title}</strong> — {it.note}
              </>
            ))}
          />
        </Card>
      </FadeIn>

      {/* Picks */}
      <FadeIn className="px-5 pt-6">
        <Kicker className="mb-2.5">Our picks</Kicker>
        <Card className="px-4">
          {picks.map((p, i) => (
            <div
              key={p.name}
              className={`flex items-center gap-3 py-3 ${i < picks.length - 1 ? 'border-b border-line' : ''}`}
            >
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold">{p.name}</p>
                <p className="mt-0.5 text-xs text-stone">{p.sub}</p>
              </div>
              <span className="shrink-0 rounded-full bg-pine/8 px-2 py-1 text-[10.5px] font-bold uppercase tracking-[0.08em] text-pine">
                {p.tag}
              </span>
            </div>
          ))}
        </Card>
      </FadeIn>

      {/* Trash */}
      <FadeIn className="px-5 pt-6">
        <Kicker className="mb-2.5">Trash & wildlife</Kicker>
        <Card className="p-4">
          <div className="flex gap-3.5">
            <IconBadge icon={Trash2} tone="cedar" />
            <p className="text-[13.5px] leading-relaxed text-stone">
              Household trash goes in the two garage bins and must be emptied daily into the lot
              dumpsters — one for trash, one for recycling (yellow lid). Never leave bags on the
              floor: <strong className="text-ink">bears and moose are regulars here.</strong>
            </p>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <img src={dumpster} alt="Parking lot dumpsters" className="h-28 w-full rounded-xl object-cover" loading="lazy" />
            <img src={garage_dumpster} alt="Garage trash bins" className="h-28 w-full rounded-xl object-cover" loading="lazy" />
          </div>
          <div className="mt-3">
            <Bullets
              items={[
                'Dumpsters are shared with Winter Park Station tenants',
                'Break down all boxes before recycling',
              ]}
            />
          </div>
          <img src={posted_sign} alt="Posted wildlife sign" className="mx-auto mt-3 max-w-48 rounded-xl" loading="lazy" />
        </Card>
      </FadeIn>
    </div>
  );
}
