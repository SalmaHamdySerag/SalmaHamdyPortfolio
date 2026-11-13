'use client';

import { useEffect, useState } from 'react';

/** True once the page has scrolled past `threshold` px — drives the
 *  back-to-top button visibility. */
export function useScrollThreshold(threshold = 420): boolean {
  const [past, setPast] = useState(false);

  useEffect(() => {
    function onScroll() {
      setPast(window.scrollY > threshold);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return past;
}
