'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { useCountUp } from '@/hooks/useCountUp';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
}

export function AnimatedCounter({ target, suffix = '' }: AnimatedCounterProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const value = useCountUp(target, inView);

  return (
    <b ref={ref}>
      {value}
      {suffix}
    </b>
  );
}
