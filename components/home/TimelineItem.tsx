import clsx from 'clsx';
import type { ExperienceEntry, Lang } from '@/types';
import { Reveal } from '@/components/animations/Reveal';

interface TimelineItemProps {
  entry: ExperienceEntry;
  lang: Lang;
  projectsLabel: string;
}

export function TimelineItem({ entry, lang, projectsLabel }: TimelineItemProps) {
  const content = entry[lang];

  return (
    <Reveal className={clsx('tl-item', entry.current && 'current')} amount={0.2}>
      <div className="tl-dot" />
      <div className="tl-meta">
        {entry.date[lang]} · {content.location}
      </div>
      <div className="tl-head">
        <h3>{content.role}</h3>
        <span className="co">@ {entry.company}</span>
      </div>
      <div className="tl-proj">
        {projectsLabel} {content.projects}
      </div>
      <ul>
        {content.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </Reveal>
  );
}
