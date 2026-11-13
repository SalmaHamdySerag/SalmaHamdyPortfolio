'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Container } from '@/components/ui/Container';
import { SectionHead } from '@/components/ui/SectionHead';
import { Reveal } from '@/components/animations/Reveal';
import { IconDraw } from '@/components/ui/IconDraw';
import { ABOUT_MOTIF } from '@/lib/data/icons';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about">
      <Container>
        <SectionHead num={t('about_num')} title={t('about_title')} />
        <div className="about-grid">
          <Reveal>
            <div className="about-motif">
              <IconDraw>{ABOUT_MOTIF}</IconDraw>
              <div>
                <b>Salma Hamdy</b>
                <span>{t('about_subtitle')}</span>
              </div>
            </div>
            <p>{t('about_p1')}</p>
            <p>{t('about_p2')}</p>
            <p>{t('about_p3')}</p>
          </Reveal>

          <div className="info-card">
            <h4>{t('about_quickfacts')}</h4>
            <div className="info-row">
              <span className="lbl">{t('about_location')}</span>
              <span>{t('about_location_val')}</span>
            </div>
            <div className="info-row">
              <span className="lbl">{t('about_email')}</span>
              <a href="mailto:salmahamdy1220@gmail.com">salmahamdy1220@gmail.com</a>
            </div>
            <div className="info-row">
              <span className="lbl">{t('about_phone')}</span>
              <a href="tel:+201129407071">+20 112 940 7071</a>
            </div>
            <div className="info-row">
              <span className="lbl">GitHub</span>
              <a href="https://github.com/salmahamdy1220" target="_blank" rel="noopener noreferrer">
                github.com/salmahamdy1220
              </a>
            </div>
            <div className="info-row">
              <span className="lbl">LinkedIn</span>
              <a href="https://linkedin.com/in/salma-hamdy-4905463b6" target="_blank" rel="noopener noreferrer">
                in/salma-hamdy-4905463b6
              </a>
            </div>

            <div className="edu-item">
              <b>{t('about_edu1_title')}</b>
              <span>{t('about_edu1_sub')}</span>
            </div>
            <div className="edu-item">
              <b>{t('about_edu2_title')}</b>
              <span>{t('about_edu2_sub')}</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
