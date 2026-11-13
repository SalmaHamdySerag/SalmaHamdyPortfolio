'use client';

import clsx from 'clsx';
import { useScrollThreshold } from '@/hooks/useScrollThreshold';

export function BackToTop() {
  const show = useScrollThreshold(420);

  return (
    <button
      className={clsx('back-to-top', show && 'show')}
      aria-label="Back to top"
      title="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
