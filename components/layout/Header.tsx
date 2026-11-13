'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { useClock } from '@/hooks/useClock';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { Navigation } from './Navigation';
import { MobileMenu } from './MobileMenu';

const SECTION_IDS = ['home', 'about', 'stack', 'experience', 'projects', 'contact'];

export function Header() {
  const { t, lang, toggleLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const clock = useClock();
  const active = useScrollSpy(SECTION_IDS);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="statusbar">
        <span>
          <span className="blink" /> <span className="live-tag">system:</span> <span>{t('status_available')}</span>
        </span>
        <span className="hide-mobile">
          {t('status_location')} · UTC+2 · <span>{clock}</span>
        </span>
      </div>

      <nav>
        <div className="navrow wrap" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <a href="#home" className="logo">
            S<span>H</span>
          </a>
          <div className="navlinks">
            <Navigation active={active} variant="desktop" />
          </div>
          <div className="nav-actions">
            <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle dark / light mode" title="Toggle theme">
              {theme === 'dark' ? (
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="4.2" />
                  <path d="M12 2.5v3M12 18.5v3M21.5 12h-3M5.5 12h-3M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1M18.4 18.4l-2.1-2.1M7.7 7.7 5.6 5.6" />
                </svg>
              )}
            </button>
            <button className="lang-btn" onClick={toggleLang} aria-label="Switch language" title="EN / AR">
              {lang === 'ar' ? 'AR' : 'EN'}
            </button>
            <a href="#contact" className="btn btn-primary" style={{ textDecoration: 'none' }}>
              {t('nav_hire')}
            </a>
            <button
              className="navtoggle"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              ☰
            </button>
          </div>
        </div>
        <MobileMenu open={menuOpen} active={active} onClose={() => setMenuOpen(false)} />
      </nav>
    </>
  );
}
