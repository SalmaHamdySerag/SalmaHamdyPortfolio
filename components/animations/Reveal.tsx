'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  amount?: number;
}

/** Fade + translate-up reveal, triggered when the element scrolls into view.
 *  Matches the timing/easing of the original CSS `.reveal` class. */
export function Reveal({ children, className, delay = 0, once = true, amount = 0.12 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}
