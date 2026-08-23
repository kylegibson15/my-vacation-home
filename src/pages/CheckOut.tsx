import { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, CircleCheckBig } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import Confetti from '../components/Confetti';
import { PageHeader } from '../components/ui';

const tasks = [
  {
    id: 'windows',
    title: 'Windows & Doors',
    desc: 'Secure all doors and windows. Move blinds out of the way.',
  },
  {
    id: 'trash',
    title: 'Trash',
    desc: 'Bag all trash and place in the garage trash area.',
  },
  {
    id: 'dishes',
    title: 'Dishes',
    desc: 'Load and run the dishwasher. Pods are under the sink.',
  },
  {
    id: 'lights',
    title: 'Lights',
    desc: 'Turn off all lights.',
  },
  {
    id: 'thermostat',
    title: 'Thermostat',
    desc: 'Set the heat to 55°F before leaving.',
  },
  {
    id: 'beds',
    title: 'Beds & Linens',
    desc: 'Strip beds. Place used towels on tile floor.',
  },
  {
    id: 'fireplace',
    title: 'Fireplace',
    desc: 'Turn the fireplace thermostat down to 60°F.',
  },
  {
    id: 'storage',
    title: 'Storage locker',
    desc: 'Empty locker #302 and hang the building & locker keys back on the entry hook.',
  },
  {
    id: 'keys',
    title: 'Lockbox key',
    desc: 'Return the lockbox key to the lockbox.',
  },
];

const STORAGE_KEY = 'checkout-checked';

function loadChecked(): Set<string> {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return new Set(JSON.parse(saved));
  } catch {
    // ignore
  }
  return new Set();
}

function saveChecked(checked: Set<string>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...checked]));
}

export default function CheckOut() {
  const [checked, setChecked] = useState<Set<string>>(() => new Set());
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setChecked(loadChecked());
  }, []);

  const toggle = useCallback((id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      saveChecked(next);

      // Trigger confetti when completing all tasks
      if (next.size === tasks.length) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
      }

      return next;
    });
  }, []);

  const completedCount = checked.size;
  const totalCount = tasks.length;
  const progress = completedCount / totalCount;
  const allDone = completedCount === totalCount;

  return (
    <div className="pb-8">
      <Confetti active={showConfetti} />
      <PageHeader kicker="Before you leave" title="Check out" />

      {/* Progress bar */}
      <div className="mx-5 mt-6 mb-5 flex items-center gap-3">
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-line">
          <motion.div
            className="h-full rounded-full bg-pine"
            initial={{ width: 0 }}
            animate={{ width: `${progress * 100}%` }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        </div>
        <span className="shrink-0 font-serif text-base text-pine">
          {completedCount} of {totalCount}
        </span>
      </div>

      {/* Checklist card */}
      <FadeIn className="mx-5">
        <div className="overflow-hidden rounded-[18px] border border-line bg-card">
          {tasks.map((task, index) => {
            const isDone = checked.has(task.id);
            const isLast = index === tasks.length - 1;

            return (
              <button
                key={task.id}
                type="button"
                onClick={() => toggle(task.id)}
                className={`flex w-full items-start gap-3 px-4 py-3.5 text-left transition-colors active:bg-paper ${
                  !isLast ? 'border-b border-line' : ''
                }`}
                aria-label={`Mark ${task.title} as ${isDone ? 'incomplete' : 'complete'}`}
              >
                <div
                  className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border-2 transition-colors ${
                    isDone
                      ? 'border-pine bg-pine'
                      : 'border-line bg-transparent'
                  }`}
                >
                  <AnimatePresence>
                    {isDone && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.15, ease: 'easeOut' }}
                      >
                        <Check className="h-4 w-4 text-white" strokeWidth={3} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="min-w-0 flex-1">
                  <p
                    className={`text-sm font-bold text-ink transition-all ${
                      isDone ? 'line-through opacity-50' : ''
                    }`}
                  >
                    {task.title}
                  </p>
                  <p className="mt-0.5 text-xs text-stone">
                    {task.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </FadeIn>

      {/* Completion state */}
      <AnimatePresence>
        {allDone && (
          <motion.div
            className="mt-8 flex flex-col items-center text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-pine/8">
              <CircleCheckBig className="h-8 w-8 text-pine" />
            </div>
            <p className="font-serif text-2xl text-pine">All done!</p>
            <p className="mt-1 text-sm text-stone">
              Thank you for staying with us. Safe travels!
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
