'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
}

/** Mounts with a fade + rise, matching the original `.hero-anim` keyframes. */
export function FadeIn({ children, className, delay = 0, duration = 0.7, y = 14 }: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
