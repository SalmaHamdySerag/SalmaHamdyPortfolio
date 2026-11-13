'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { FadeIn } from '@/components/animations/FadeIn';
import { TerminalWindow } from './TerminalWindow';

const STATS: { target: number; suffix: string; labelKey: string }[] = [
  { target: 2, suffix: '+', labelKey: 'stat_years' },
  { target: 6, suffix: '', labelKey: 'stat_platforms' },
  { target: 100, suffix: 'K+', labelKey: 'stat_tech' },
  { target: 5, suffix: 'K+', labelKey: 'stat_lead' },
];

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero" id="home">
      <Container className="hero-grid">
        <div>
          <FadeIn delay={0.05}>
            <div className="eyebrow">
              <span className="dot" /> <span>{t('hero_eyebrow')}</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.18}>
            <h1>Salma Hamdy</h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="role">
              <span>{t('hero_role1')}</span> <span className="sep">/</span> <span>{t('hero_role2')}</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.42}>
            <p className="lede">{t('hero_lede')}</p>
          </FadeIn>
          <FadeIn delay={0.54}>
            <div className="hero-ctas">
              <Button as="a" href="#projects" variant="primary">
                {t('hero_cta1')}
              </Button>
              <Button as="a" href="#contact" variant="ghost">
                {t('hero_cta2')}
              </Button>
            </div>
          </FadeIn>
          <FadeIn delay={0.66}>
            <div className="stats-row">
              {STATS.map((s) => (
                <div className="stat" key={s.labelKey}>
                  <AnimatedCounter target={s.target} suffix={s.suffix} />
                  <span>{t(s.labelKey)}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        <TerminalWindow />
      </Container>
    </section>
  );
}
