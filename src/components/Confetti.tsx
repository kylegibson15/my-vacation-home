import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const COLORS = ['#6B8F71', '#C17B4A', '#2B4C5B', '#8BAF91', '#D4955F', '#3D6A7D'];
const PARTICLE_COUNT = 40;

interface Particle {
  id: number;
  x: number;
  y: number;
  rotation: number;
  color: string;
  size: number;
  shape: 'circle' | 'rect' | 'star';
}

function createParticles(): Particle[] {
  return Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: 40 + Math.random() * 20,
    rotation: Math.random() * 360,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    size: 4 + Math.random() * 6,
    shape: (['circle', 'rect', 'star'] as const)[Math.floor(Math.random() * 3)],
  }));
}

export default function Confetti({ active }: { active: boolean }) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (active) {
      setParticles(createParticles());
      const timer = setTimeout(() => setParticles([]), 2500);
      return () => clearTimeout(timer);
    } else {
      setParticles([]);
    }
  }, [active]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[200] overflow-hidden">
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              opacity: 1,
              scale: 0,
              rotate: 0,
            }}
            animate={{
              top: `${p.y + 40 + Math.random() * 30}%`,
              left: `${p.x + (Math.random() - 0.5) * 30}%`,
              opacity: 0,
              scale: 1,
              rotate: p.rotation + (Math.random() - 0.5) * 400,
            }}
            transition={{
              duration: 1.5 + Math.random() * 1,
              ease: [0.2, 0.8, 0.4, 1],
            }}
            className="absolute"
            style={{
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              borderRadius: p.shape === 'circle' ? '50%' : p.shape === 'star' ? '2px' : '1px',
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
