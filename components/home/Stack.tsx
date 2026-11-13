'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Container } from '@/components/ui/Container';
import { SectionHead } from '@/components/ui/SectionHead';
import { Reveal } from '@/components/animations/Reveal';
import { Chip } from '@/components/ui/Tag';
import { IconDraw } from '@/components/ui/IconDraw';
import { STACK_ICONS } from '@/lib/data/icons';

const GROUPS: { key: string; labelKey: string; chips: string[] }[] = [
  { key: 'backend', labelKey: 'stack_backend', chips: ['Laravel', 'PHP', 'Node.js', 'Python', 'Microservices', 'REST APIs'] },
  { key: 'frontend', labelKey: 'stack_frontend', chips: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'] },
  { key: 'database', labelKey: 'stack_database', chips: ['MySQL', 'PostgreSQL', 'Redis', 'Laravel Reverb', 'WebSockets', 'Firebase'] },
  { key: 'devops', labelKey: 'stack_devops', chips: ['Git', 'GitHub', 'Postman', 'Queues & Jobs', 'Service Layer', 'Repository Pattern'] },
];

export function Stack() {
  const { t } = useLanguage();

  return (
    <section
      id="stack"
      style={{ background: 'var(--bg-raise)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
    >
      <Container>
        <SectionHead num={t('stack_num')} title={t('stack_title')} sub={t('stack_sub')} />
        <Reveal className="stack-groups">
          {GROUPS.map((group) => (
            <div className="stack-group" key={group.key}>
              <h4>
                <IconDraw className="stack-icon">{STACK_ICONS[group.key]}</IconDraw>
                <span>{t(group.labelKey)}</span>
              </h4>
              <div className="chip-row">
                {group.chips.map((chip) => (
                  <Chip key={chip}>{chip}</Chip>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
