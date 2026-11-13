'use client';

import { useEffect, useState } from 'react';

/** Tracks which section id is currently "active" while scrolling, exactly
 *  like the original vanilla-JS nav highlighter (140px offset trigger). */
export function useScrollSpy(sectionIds: string[], offset = 140): string {
  const [active, setActive] = useState(sectionIds[0] ?? '');

  useEffect(() => {
    function onScroll() {
      let current = sectionIds[0] ?? '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - offset) {
          current = id;
        }
      }
      setActive(current);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [sectionIds, offset]);

  return active;
}
