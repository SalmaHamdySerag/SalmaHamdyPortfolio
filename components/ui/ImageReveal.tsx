'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import clsx from 'clsx';

interface ImageRevealProps {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
}

/** Fades + scales a project cover photo in the first time it scrolls into
 *  view. Uses the same `useInView` trigger (once, 35% visible) as IconDraw,
 *  so the photo and the line-art icon badge that sits on top of it animate
 *  in on the same beat — the image leads, the icon settles in right after. */
export function ImageReveal({ src, alt, sizes, priority }: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });

  return (
    <div ref={ref} className="card-cover-img-wrap">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes ?? '(max-width: 768px) 100vw, 380px'}
        className={clsx('card-cover-img', inView && 'in-view')}
      />
    </div>
  );
}
