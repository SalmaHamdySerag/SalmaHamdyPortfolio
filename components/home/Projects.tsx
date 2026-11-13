'use client';

import { useMemo, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Container } from '@/components/ui/Container';
import { SectionHead } from '@/components/ui/SectionHead';
import { Reveal } from '@/components/animations/Reveal';
import { PROJECTS } from '@/lib/data/projects';
import type { FilterKey, Project } from '@/types';
import { ProjectFilter } from './ProjectFilter';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

function matchesFilter(project: Project, filter: FilterKey): boolean {
  if (filter === 'all') return true;
  if (filter === 'flagship') return project.group === 'flagship';
  if (filter === 'live') return project.status === 'live' || project.status === 'issue';
  if (filter === 'private') return project.status === 'private';
  return true;
}

export function Projects() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<FilterKey>('all');
  const [openProject, setOpenProject] = useState<Project | null>(null);

  const visible = useMemo(() => PROJECTS.filter((p) => matchesFilter(p, filter)), [filter]);

  return (
    <section
      id="projects"
      style={{ background: 'var(--bg-raise)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
    >
      <Container>
        <SectionHead num={t('proj_num')} title={t('proj_title')} sub={t('proj_sub')} />
        <ProjectFilter active={filter} onChange={setFilter} />
        <Reveal className="proj-grid" amount={0.05}>
          {visible.map((project) => (
            <ProjectCard key={project.file} project={project} onOpen={() => setOpenProject(project)} />
          ))}
        </Reveal>
      </Container>

      <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
    </section>
  );
}
