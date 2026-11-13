'use client';

import { useEffect, useState } from 'react';

function formatCairoTime(): string {
  const now = new Date();
  const cairo = new Date(now.toLocaleString('en-US', { timeZone: 'Africa/Cairo' }));
  const hh = String(cairo.getHours()).padStart(2, '0');
  const mm = String(cairo.getMinutes()).padStart(2, '0');
  return `${hh}:${mm}`;
}

/** Live HH:MM clock for Africa/Cairo, matching the original status bar. */
export function useClock(intervalMs = 15000): string {
  const [time, setTime] = useState<string>('--:--');

  useEffect(() => {
    setTime(formatCairoTime());
    const id = setInterval(() => setTime(formatCairoTime()), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);

  return time;
}
