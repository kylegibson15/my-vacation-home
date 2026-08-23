import { Outlet, useLocation, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Home, KeyRound, BookOpen, ClipboardCheck, Compass } from 'lucide-react';

const BASE_ROUTE = import.meta.env.BASE_URL.replace(/\/$/, '');

const tabs = [
  { label: 'Home', icon: Home, path: BASE_ROUTE || '/' },
  { label: 'Access', icon: KeyRound, path: `${BASE_ROUTE}/access` },
  { label: 'Guide', icon: BookOpen, path: `${BASE_ROUTE}/guide` },
  { label: 'Check Out', icon: ClipboardCheck, path: `${BASE_ROUTE}/check-out` },
  { label: 'Explore', icon: Compass, path: `${BASE_ROUTE}/explore` },
];

export default function AppShell() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === BASE_ROUTE || path === '/') {
      return (
        location.pathname === BASE_ROUTE ||
        location.pathname === `${BASE_ROUTE}/` ||
        location.pathname === '/'
      );
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="topo flex min-h-dvh flex-col">
      <main className="mx-auto w-full max-w-2xl flex-1 pb-24 md:my-8 md:overflow-hidden md:rounded-3xl md:bg-card md:pb-28 md:shadow-[0_20px_60px_rgba(31,58,46,0.18)] md:ring-1 md:ring-line">
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

      <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-card/94 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-2xl items-end justify-around px-2 pt-2.5 pb-1.5">
          {tabs.map(({ label, icon: Icon, path }) => {
            const active = isActive(path);
            return (
              <Link
                key={path}
                to={path}
                className={`flex w-16 flex-col items-center gap-1 transition-colors ${
                  active ? 'text-cedar' : 'text-ash hover:text-stone'
                }`}
              >
                <Icon size={22} strokeWidth={active ? 2.2 : 1.8} />
                <span className={`text-[10px] leading-tight ${active ? 'font-bold' : 'font-semibold'}`}>
                  {label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
