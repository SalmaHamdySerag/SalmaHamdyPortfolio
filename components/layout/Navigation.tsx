'use client';

import clsx from 'clsx';
import { useLanguage } from '@/contexts/LanguageContext';

const LINKS: { href: string; key: string }[] = [
  { href: '#home', key: 'nav_home' },
  { href: '#about', key: 'nav_about' },
  { href: '#stack', key: 'nav_stack' },
  { href: '#experience', key: 'nav_experience' },
  { href: '#projects', key: 'nav_projects' },
  { href: '#contact', key: 'nav_contact' },
];

interface NavigationProps {
  active: string;
  onNavigate?: () => void;
  variant: 'desktop' | 'mobile';
}

export function Navigation({ active, onNavigate, variant }: NavigationProps) {
  const { t } = useLanguage();

  return (
    <>
      {LINKS.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className={clsx(active === link.href.slice(1) && variant === 'desktop' && 'active')}
          onClick={onNavigate}
        >
          {t(link.key)}
        </a>
      ))}
    </>
  );
}
