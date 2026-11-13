'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Container } from '@/components/ui/Container';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer>
      <Container className="foot-row">
        <p>{t('footer_text')}</p>
        <div className="foot-links">
          <a href="#home">{t('nav_home')}</a>
          <a href="#projects">{t('nav_projects')}</a>
          <a href="#contact">{t('nav_contact')}</a>
        </div>
      </Container>
    </footer>
  );
}
