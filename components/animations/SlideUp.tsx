'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SlideUpProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/** Larger-distance rise + fade, used for modal/gallery content entrances. */
export function SlideUp({ children, className, delay = 0 }: SlideUpProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.35, delay, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
