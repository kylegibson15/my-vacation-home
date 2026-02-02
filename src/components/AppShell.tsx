import { Outlet, useLocation, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Home, BookOpen, ClipboardCheck, Compass } from 'lucide-react';

const BASE_ROUTE = import.meta.env.BASE_URL.replace(/\/$/, '');

const tabs = [
  { label: 'Home', icon: Home, path: BASE_ROUTE || '/' },
  { label: 'Guide', icon: BookOpen, path: `${BASE_ROUTE}/guide` },
  { label: 'Check Out', icon: ClipboardCheck, path: `${BASE_ROUTE}/check-out` },
  { label: 'Explore', icon: Compass, path: `${BASE_ROUTE}/explore` },
];

export default function AppShell() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === BASE_ROUTE || path === '/') {
      return location.pathname === BASE_ROUTE || location.pathname === `${BASE_ROUTE}/` || location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="flex min-h-dvh flex-col bg-warm-bg">
      {/* Desktop: centered "phone frame" with subtle shadow */}
      <main className="mx-auto w-full max-w-2xl flex-1 overflow-y-auto pb-20 md:my-8 md:rounded-3xl md:bg-warm-surface md:pb-24 md:shadow-xl md:ring-1 md:ring-warm-border">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom nav — constrained to same max-width on desktop */}
      <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-warm-border bg-white/80 backdrop-blur-xl pb-[env(safe-area-inset-bottom)] md:bg-white/95">
        <div className="mx-auto flex max-w-2xl items-center justify-around px-2 pt-2 pb-1 md:rounded-b-3xl">
          {tabs.map(({ label, icon: Icon, path }) => {
            const active = isActive(path);
            return (
              <Link
                key={path}
                to={path}
                className={`flex flex-1 flex-col items-center gap-0.5 transition-colors ${active ? 'text-amber' : 'text-text-tertiary hover:text-text-secondary'}`}
              >
                <Icon size={22} strokeWidth={active ? 2.2 : 1.8} />
                <span className="text-[10px] font-medium leading-tight">{label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
