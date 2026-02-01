import { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, CircleCheckBig } from 'lucide-react';

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
    id: 'keys',
    title: 'Keys',
    desc: 'Return the lockbox key to its place.',
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
      return next;
    });
  }, []);

  const completedCount = checked.size;
  const totalCount = tasks.length;
  const progress = completedCount / totalCount;
  const allDone = completedCount === totalCount;

  return (
    <div className="min-h-screen bg-warm-bg px-4 py-8 pb-16">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-text-primary">Check Out</h1>
        <p className="mt-1 text-sm text-text-tertiary">
          Complete these before you leave
        </p>
      </div>

      {/* Progress bar */}
      <div className="mb-6 flex items-center gap-3">
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-warm-muted">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-sage to-sage-light"
            initial={{ width: 0 }}
            animate={{ width: `${progress * 100}%` }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        </div>
        <span className="shrink-0 text-xs text-text-tertiary">
          {completedCount} of {totalCount} complete
        </span>
      </div>

      {/* Checklist card */}
      <div className="overflow-hidden rounded-2xl bg-warm-surface shadow-sm">
        {tasks.map((task, index) => {
          const isDone = checked.has(task.id);
          const isLast = index === tasks.length - 1;

          return (
            <button
              key={task.id}
              type="button"
              onClick={() => toggle(task.id)}
              className={`flex w-full items-start gap-3 px-4 py-3.5 text-left transition-colors active:bg-warm-muted ${
                !isLast ? 'border-b border-warm-border' : ''
              }`}
              aria-label={`Mark ${task.title} as ${isDone ? 'incomplete' : 'complete'}`}
            >
              {/* Custom checkbox */}
              <div
                className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border-2 transition-colors ${
                  isDone
                    ? 'border-sage bg-sage'
                    : 'border-warm-border bg-transparent'
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

              {/* Text content */}
              <div className="min-w-0 flex-1">
                <p
                  className={`text-sm font-semibold text-text-primary transition-all ${
                    isDone ? 'line-through opacity-50' : ''
                  }`}
                >
                  {task.title}
                </p>
                <p className="mt-0.5 text-xs text-text-secondary">
                  {task.desc}
                </p>
              </div>
            </button>
          );
        })}
      </div>

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
            <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-sage/10">
              <CircleCheckBig className="h-8 w-8 text-sage" />
            </div>
            <p className="text-lg font-bold text-text-primary">All done!</p>
            <p className="mt-1 text-sm text-text-tertiary">
              Thank you for staying with us. Safe travels!
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
