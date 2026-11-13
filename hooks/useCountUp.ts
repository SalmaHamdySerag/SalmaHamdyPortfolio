'use client';

import { useEffect, useRef, useState } from 'react';

/** Eases a number from 0 to `target` over `duration` ms once `start` is true. */
export function useCountUp(target: number, start: boolean, duration = 1100): number {
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!start || started.current) return;
    started.current = true;

    let raf: number;
    const startTime = performance.now();

    function step(now: number) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);

  return value;
}
