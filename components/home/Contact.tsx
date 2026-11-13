'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/animations/Reveal';
import { IconDraw } from '@/components/ui/IconDraw';
import { CONTACT_MOTIF } from '@/lib/data/icons';

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact">
      <Container>
        <Reveal className="contact-box">
          <div>
            <IconDraw className="contact-motif">{CONTACT_MOTIF}</IconDraw>
            <h2>{t('contact_title')}</h2>
            <p>{t('contact_p')}</p>
            <Button as="a" href="mailto:salmahamdy1220@gmail.com" variant="primary">
              {t('contact_cta')}
            </Button>
          </div>
          <div className="contact-list">
            <a href="mailto:salmahamdy1220@gmail.com">
              <span className="ico">@</span> salmahamdy1220@gmail.com
            </a>
            <a href="tel:+201129407071">
              <span className="ico">#</span> +20 112 940 7071
            </a>
            <a href="https://github.com/salmahamdy1220" target="_blank" rel="noopener noreferrer">
              <span className="ico">gh</span> github.com/salmahamdy1220
            </a>
            <a href="https://linkedin.com/in/salma-hamdy-4905463b6" target="_blank" rel="noopener noreferrer">
              <span className="ico">in</span> linkedin.com/in/salma-hamdy-4905463b6
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
