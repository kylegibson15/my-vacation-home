import { Car, Lock, ChefHat, Flame, ScrollText, Phone } from 'lucide-react';

const sections = [
  {
    icon: Car,
    title: 'Parking',
    bgColor: 'bg-slate-brand/10',
    iconColor: 'text-slate-brand',
    content: (
      <p className="text-sm text-text-secondary leading-relaxed">
        Parking is underneath the building — unassigned, but please limit to one car.
      </p>
    ),
  },
  {
    icon: Lock,
    title: 'Storage',
    bgColor: 'bg-sage/10',
    iconColor: 'text-sage',
    content: (
      <p className="text-sm text-text-secondary leading-relaxed">
        Storage locker #302 is on the same floor near the elevator. Use the provided key (found on a hook at the entrance) for skis, boards, and outdoor gear.
      </p>
    ),
  },
  {
    icon: ChefHat,
    title: 'Kitchen',
    bgColor: 'bg-amber/10',
    iconColor: 'text-amber',
    content: (
      <p className="text-sm text-text-secondary leading-relaxed">
        The kitchen is stocked and ready! Please scrape and rinse dishes before loading the dishwasher. Before leaving, start the dishwasher with any remaining dirty dishes — we'll put them away for you.
      </p>
    ),
  },
  {
    icon: Flame,
    title: 'Fireplace',
    bgColor: 'bg-amber/10',
    iconColor: 'text-amber',
    content: (
      <p className="text-sm text-text-secondary leading-relaxed">
        The thermostat is inside the shelving unit to the left of the TV. Set it to your preference — the fireplace turns on and off automatically. Please turn it down to 60° before you leave.
      </p>
    ),
  },
  {
    icon: ScrollText,
    title: 'House Rules',
    bgColor: 'bg-slate-brand/10',
    iconColor: 'text-slate-brand',
    content: (
      <ul className="space-y-2 text-sm text-text-secondary leading-relaxed">
        {[
          'Remove shoes at the door',
          'Quiet hours: 10pm – 9am',
          'No smoking of any kind, including vape',
          'No trash in the hallway — use garage bins',
        ].map((rule) => (
          <li key={rule} className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-text-tertiary" />
            {rule}
          </li>
        ))}
      </ul>
    ),
  },
  {
    icon: Phone,
    title: 'Contact',
    bgColor: 'bg-sage/10',
    iconColor: 'text-sage',
    content: (
      <p className="text-sm text-text-secondary leading-relaxed">
        Need help? Message or call Vacasa — they'll be able to assist you with anything during your stay.
      </p>
    ),
  },
];

export default function Guide() {
  return (
    <div className="px-4 pt-6 pb-10">
      <div className="mb-5">
        <h1 className="text-2xl font-bold text-text-primary">House Guide</h1>
        <p className="text-text-secondary text-sm">Everything you need to know</p>
      </div>

      {sections.map(({ icon: Icon, title, bgColor, iconColor, content }) => (
        <div
          key={title}
          className="bg-warm-surface rounded-2xl shadow-sm p-5 mb-3"
        >
          <div className="flex items-center gap-3 mb-3">
            <div
              className={`${bgColor} w-9 h-9 flex items-center justify-center rounded-lg`}
            >
              <Icon className={`${iconColor} w-[18px] h-[18px]`} />
            </div>
            <h2 className="font-bold text-text-primary">{title}</h2>
          </div>
          {content}
        </div>
      ))}
    </div>
  );
}
