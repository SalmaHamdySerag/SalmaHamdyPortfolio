'use client';

import clsx from 'clsx';
import { useLanguage } from '@/contexts/LanguageContext';
import { FILTERS } from '@/lib/data/dictionary';
import type { FilterKey } from '@/types';
import { Reveal } from '@/components/animations/Reveal';

interface ProjectFilterProps {
  active: FilterKey;
  onChange: (key: FilterKey) => void;
}

export function ProjectFilter({ active, onChange }: ProjectFilterProps) {
  const { t } = useLanguage();

  return (
    <Reveal className="proj-filter">
      {FILTERS.map((f) => (
        <button
          key={f.key}
          className={clsx('filter-btn', active === f.key && 'active')}
          onClick={() => onChange(f.key)}
          aria-pressed={active === f.key}
        >
          {t(f.label)}
        </button>
      ))}
    </Reveal>
  );
}
