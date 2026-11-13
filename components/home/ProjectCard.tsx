'use client';

import type { CSSProperties } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import type { Project } from '@/types';
import { ICONS } from '@/lib/data/icons';
import { IconDraw } from '@/components/ui/IconDraw';
import { ImageReveal } from '@/components/ui/ImageReveal';
import { Tag } from '@/components/ui/Tag';

interface ProjectCardProps {
  project: Project;
  onOpen: () => void;
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const { lang, t } = useLanguage();
  const content = project[lang];
  const isPrivate = project.status === 'private';
  const statusLabel = isPrivate ? t('status_private') : project.status === 'issue' ? t('status_issue') : t('status_live');

  return (
    <button className="card" style={{ '--tint': project.tint } as CSSProperties} onClick={onOpen}>
      <div className="card-cover">
        <ImageReveal src={project.image} alt={content.title} />
        <div className="card-cover-badge">
          <IconDraw>{ICONS[project.icon]}</IconDraw>
        </div>
      </div>
      <div className="card-bar">
        <div className="term-dot" style={{ background: '#ff5f57', width: 8, height: 8 }} />
        <div className="term-dot" style={{ background: '#febc2e', width: 8, height: 8 }} />
        <div className="term-dot" style={{ background: '#28c840', width: 8, height: 8 }} />
        <span className="fname">{project.file}</span>
      </div>
      <div className="card-body">
        <h3>{content.title}</h3>
        <p>{content.tagline}</p>
        <div className="tag-row">
          {project.tags.slice(0, 4).map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <div className="card-foot">
          <span className={`status ${isPrivate ? 'priv' : 'live'}`}>
            <span className="sdot" />
            {statusLabel}
          </span>
          <span className="arrow">{t('card_arrow')}</span>
        </div>
      </div>
    </button>
  );
}
