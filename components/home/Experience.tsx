'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Container } from '@/components/ui/Container';
import { SectionHead } from '@/components/ui/SectionHead';
import { EXPERIENCE } from '@/lib/data/experience';
import { TimelineItem } from './TimelineItem';

export function Experience() {
  const { t, lang } = useLanguage();
  const timelineRef = useRef<HTMLDivElement>(null);
  const [progressPct, setProgressPct] = useState(0);
  const [markerVisible, setMarkerVisible] = useState(false);

  useEffect(() => {
    function update() {
      const el = timelineRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const totalHeight = el.offsetHeight;
      if (!totalHeight) return;

      const refLine = vh * 0.38;
      let progressPx = refLine - rect.top;
      progressPx = Math.max(0, Math.min(totalHeight, progressPx));
      setProgressPct((progressPx / totalHeight) * 100);
      setMarkerVisible(rect.bottom > 0 && rect.top < vh);
    }
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <section id="experience">
      <Container>
        <SectionHead num={t('exp_num')} title={t('exp_title')} sub={t('exp_sub')} />
        <div className="timeline" ref={timelineRef}>
          <div className="timeline-progress" style={{ height: `${progressPct}%` }} />
          <div
            className="timeline-marker"
            style={{ top: `${progressPct}%`, opacity: markerVisible ? 1 : 0 }}
          />
          {EXPERIENCE.map((entry) => (
            <TimelineItem key={entry.company + entry.date.en} entry={entry} lang={lang} projectsLabel={t('exp_projects_label')} />
          ))}
        </div>
      </Container>
    </section>
  );
}
