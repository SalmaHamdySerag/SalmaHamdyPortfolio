'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import clsx from 'clsx';
import type { ReactNode } from 'react';

interface IconDrawProps {
  children: ReactNode;
  className?: string;
}

/** Wraps a line-art SVG icon and animates its strokes "drawing in" the first
 *  time it scrolls into view. Uses Framer Motion's useInView to trigger the
 *  same `.icon-draw.in-view` CSS transition defined in globals.css, so the
 *  stroke-dashoffset animation is pixel-identical to the original HTML. */
export function IconDraw({ children, className }: IconDrawProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });

  return (
    <div ref={ref} className={clsx('icon-draw', inView && 'in-view', className)}>
      {children}
    </div>
  );
}
