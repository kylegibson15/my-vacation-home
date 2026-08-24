import { ReactNode, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  MapPin,
  ChefHat,
  Flame,
  ScrollText,
  TriangleAlert,
  Mountain,
  PawPrint,
  CircleHelp,
  Phone,
  Tv,
  ChevronDown,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { Bullets, IconBadge, Kicker, PageHeader } from '../components/ui';
import { BUILDING } from '../lib/building';
import { SHOW_DRAFTS } from '../lib/flags';

interface Section {
  id: string;
  icon: LucideIcon;
  tone?: 'pine' | 'cedar';
  title: string;
  content: ReactNode;
}

const P = ({ children }: { children: ReactNode }) => (
  <p className="text-[13.5px] leading-relaxed text-stone">{children}</p>
);
const B = ({ children }: { children: ReactNode }) => (
  <strong className="font-bold text-ink">{children}</strong>
);
const Row = ({ label, children }: { label: string; children: ReactNode }) => (
  <p className="text-[13.5px] leading-relaxed text-stone">
    <B>{label}</B> — {children}
  </p>
);
/** Renders only in local dev until the real content is filled in. */
const Draft = ({ children }: { children: ReactNode }) =>
  SHOW_DRAFTS ? <span className="text-cedar">{children}</span> : null;
const DraftRow = ({ label, children }: { label: string; children: ReactNode }) =>
  SHOW_DRAFTS ? (
    <p className="text-[13.5px] leading-relaxed text-cedar">
      <strong className="font-bold">{label}</strong> — {children}
    </p>
  ) : null;

const groups: { kicker: string; sections: Section[] }[] = [
  {
    kicker: 'Settling in',
    sections: [
      {
        id: 'arrival',
        icon: MapPin,
        title: 'Arrival & parking',
        content: (
          <div className="space-y-2">
            <P>
              Cars under <B>6'8"</B> can park in the garage under the building. Taller vehicles
              (or a second car) can use the lot behind the building, and Cooper Square next door
              is a free garage with EV chargers.
            </P>
            <P>
              Take the elevator to 3. Storage locker <B>#302</B> is on this floor near the elevator
              — use it for skis, boards, and bikes. The key hangs {BUILDING.keyLocation}.
            </P>
          </div>
        ),
      },
      {
        id: 'kitchen',
        icon: ChefHat,
        title: 'Kitchen',
        content: (
          <P>
            The kitchen is stocked and ready. Please scrape and rinse dishes before loading the
            dishwasher. Before leaving, start the dishwasher with any remaining dirty dishes —
            we'll put them away for you.
          </P>
        ),
      },
      {
        id: 'appliances',
        icon: Tv,
        title: 'Appliance cheat sheet',
        content: (
          <div className="space-y-2">
            <Row label="TV">cable in the living room and bedrooms.<Draft> [Remote / input steps]</Draft></Row>
            <Row label="Dishwasher">pods are under the sink.</Row>
            <DraftRow label="Coffee">[machine type & where the coffee lives]</DraftRow>
            <Row label="Washer / dryer">laundry room in the building, open 24 hours — code is in Access.</Row>
            <Row label="Thermostat">inside the shelving unit to the left of the TV.</Row>
          </div>
        ),
      },
      {
        id: 'fireplace',
        icon: Flame,
        tone: 'cedar',
        title: 'Fireplace',
        content: (
          <P>
            The thermostat is inside the shelving unit to the left of the TV. Set it to your
            preference — the fireplace turns on and off automatically. Please turn it down to 60°
            before you leave.
          </P>
        ),
      },
      {
        id: 'rules',
        icon: ScrollText,
        title: 'House rules',
        content: (
          <Bullets
            items={[
              'Remove shoes at the door',
              'Quiet hours: 10pm – 9am',
              'No smoking of any kind, including vape',
              'No trash in the hallway — use the garage bins',
              'Hot tub room: 9am – 10pm, no glass',
              'One car in the garage per unit',
            ]}
          />
        ),
      },
    ],
  },
  {
    kicker: 'Safety',
    sections: [
      {
        id: 'emergency',
        icon: TriangleAlert,
        tone: 'cedar',
        title: 'Emergency & urgent care',
        content: (
          <div className="space-y-2">
            <Row label="Emergency">911</Row>
            <DraftRow label="Urgent care">[nearest clinic, address, hours]</DraftRow>
            <Row label="Hospital">Middle Park Health — Granby, ~25 min</Row>
            <DraftRow label="Host">[phone number]</DraftRow>
            <DraftRow label="Water shutoff">[location]</DraftRow>
          </div>
        ),
      },
      {
        id: 'altitude',
        icon: Mountain,
        title: 'Altitude, weather & roads',
        content: (
          <div className="space-y-2">
            <P>
              You're at about 9,000 ft. Drink more water than feels necessary, go easy on alcohol
              the first night, and take day one slow. Sun is strong year-round — sunscreen even
              when it's cloudy.
            </P>
            <P>
              Weather changes fast. Before driving Berthoud Pass or I-70, check{' '}
              <a href="https://www.cotrip.org" target="_blank" rel="noopener noreferrer" className="font-semibold underline">
                COtrip
              </a>{' '}
              for closures and Colorado's traction law — on snow days you need snow tires, AWD/4WD,
              or chains.
            </P>
          </div>
        ),
      },
      {
        id: 'wildlife',
        icon: PawPrint,
        title: 'Wildlife & pets',
        content: (
          <div className="space-y-2">
            <P>
              Moose and bears are regulars around the building. Give moose a wide berth — they
              are faster and grumpier than they look. Never leave trash outside the bins, and keep
              food out of cars.
            </P>
            <P>
              <B>Pets are welcome.</B> Please keep them leashed in the hallways and garage, pick
              up after them, and keep them off the beds.<Draft> [Where to walk them]</Draft>
            </P>
          </div>
        ),
      },
    ],
  },
  {
    kicker: 'Good to know',
    sections: [
      {
        id: 'faq',
        icon: CircleHelp,
        title: 'FAQ',
        content: (
          <div className="space-y-2">
            <DraftRow label="Extra blankets">[where]</DraftRow>
            <DraftRow label="Hair dryer">[where]</DraftRow>
            <DraftRow label="First-aid kit">[where]</DraftRow>
            <DraftRow label="Vacuum & iron">[where]</DraftRow>
            <Row label="Board games">on the shelf to the left of the fireplace, including games for kids.</Row>
          </div>
        ),
      },
      {
        id: 'contact',
        icon: Phone,
        title: 'Contact',
        content: (
          <P>
            Need help? Message or call us directly — we're happy to help with anything during
            your stay.<Draft> [Host phone number]</Draft>
          </P>
        ),
      },
    ],
  },
];

export default function Guide() {
  const [open, setOpen] = useState<Set<string>>(() => new Set(['arrival']));

  const toggle = (id: string) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <div className="pb-8">
      <PageHeader kicker="Everything you need" title="House guide" />
      {groups.map((group, gi) => (
        <FadeIn key={group.kicker} delay={gi * 0.06}>
          <Kicker className="mt-6 mb-2.5 px-5">{group.kicker}</Kicker>
          <div className="mx-5 overflow-hidden rounded-[18px] border border-line bg-card">
            {group.sections.map((s, i) => {
              const isOpen = open.has(s.id);
              const last = i === group.sections.length - 1;
              return (
                <div key={s.id} className={!last || isOpen ? 'border-b border-line' : ''}>
                  <button
                    type="button"
                    onClick={() => toggle(s.id)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-3.5 px-4 py-4 text-left transition-colors active:bg-paper"
                  >
                    <IconBadge icon={s.icon} tone={s.tone} />
                    <span className="flex-1 text-[15px] font-bold">{s.title}</span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-cedar transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 pl-[76px]">{s.content}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
