'use client';

import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import type { Project } from '@/types';
import { Tag } from '@/components/ui/Tag';
import { Gallery } from './Gallery';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { lang, t } = useLanguage();

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    if (project) {
      document.addEventListener('keydown', onKey);
      return () => document.removeEventListener('keydown', onKey);
    }
  }, [project, onClose]);

  const content = project ? project[lang] : null;

  return (
    <AnimatePresence>
      {project && content && (
        <motion.div
          className="modal-overlay open"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
          role="dialog"
          aria-modal="true"
          aria-label={content.title}
        >
          <motion.div
            className="modal"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="modal-bar">
              <span className="fname">{project.file}</span>
              <button className="modal-close" aria-label="Close" onClick={onClose}>
                ✕
              </button>
            </div>
            <div className="modal-content">
              <Gallery project={project} />
              <h3>{content.title}</h3>
              <span className="m-role">{content.tagline}</span>
              <p className="m-desc">{content.desc}</p>

              <div className="modal-subhead">{t('modal_highlights')}</div>
              <ul>
                {content.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>

              <div className="modal-subhead">{t('modal_tools')}</div>
              <div className="m-tags">
                {content.tools.map((tool) => (
                  <Tag key={tool}>{tool}</Tag>
                ))}
              </div>

              <div className="m-actions">
                {project.status === 'private' ? (
                  <span className="status priv">
                    <span className="sdot" />
                    {t('modal_private')}
                  </span>
                ) : (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    {t('modal_live')}
                  </a>
                )}
              </div>

              {project.status === 'issue' && <div className="m-note">⚠ {t('modal_issue_note')}</div>}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
