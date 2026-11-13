'use client';

import { createContext, useContext, useEffect, useState, ReactNode, useCallback, useMemo } from 'react';
import type { Lang } from '@/types';
import { DICT } from '@/lib/data/dictionary';

interface LanguageContextValue {
  lang: Lang;
  dir: 'ltr' | 'rtl';
  toggleLang: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = 'sh-lang';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored === 'en' || stored === 'ar') {
      setLang(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const toggleLang = useCallback(() => {
    setLang((l) => (l === 'en' ? 'ar' : 'en'));
  }, []);

  const t = useCallback((key: string) => DICT[lang][key] ?? key, [lang]);

  const value = useMemo(
    () => ({ lang, dir: (lang === 'ar' ? 'rtl' : 'ltr') as 'ltr' | 'rtl', toggleLang, t }),
    [lang, toggleLang, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
