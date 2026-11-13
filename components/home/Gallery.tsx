'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import type { Project } from '@/types';
import { ICONS } from '@/lib/data/icons';
import { IconDraw } from '@/components/ui/IconDraw';
import { ImageReveal } from '@/components/ui/ImageReveal';

interface GalleryProps {
  project: Project;
}

/** Two-slide crossfade in the modal gallery: the real cover photo, then the
 *  line-art icon, looping back and forth. They never show together — only
 *  one occupies the frame at a time. */
export function Gallery({ project }: GalleryProps) {
  const SLIDE_COUNT = 2; // 0 = photo, 1 = icon
  const [active, setActive] = useState(0);

  useEffect(() => {
    setActive(0);
    const id = setInterval(() => {
      setActive((i) => (i + 1) % SLIDE_COUNT);
    }, 3200);
    return () => clearInterval(id);
  }, [project]);

  return (
    <div className="gallery" style={{ '--tint': project.tint } as React.CSSProperties}>
      <div className={clsx('gallery-slide', 'gallery-slide-photo', active === 0 && 'active')}>
        <ImageReveal src={project.image} alt={project.en.title} sizes="640px" priority />
      </div>
      <div className={clsx('gallery-slide', 'gallery-slide-icon', active === 1 && 'active')}>
        <IconDraw>{ICONS[project.icon]}</IconDraw>
      </div>
      <span className="gallery-caption">{project.file}</span>
      <div className="gallery-dots">
        {Array.from({ length: SLIDE_COUNT }).map((_, i) => (
          <button
            key={i}
            className={i === active ? 'active' : ''}
            aria-label={`Slide ${i + 1}`}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </div>
  );
}
