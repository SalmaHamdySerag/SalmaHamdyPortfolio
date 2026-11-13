import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // Preflight is disabled on purpose: the project ports a hand-built,
  // pixel-perfect design system (app/globals.css) that already defines
  // its own resets/typography via CSS variables. Enabling Tailwind's
  // base reset would fight those rules. Tailwind utilities are still
  // available for spacing/layout in the new component wrappers.
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        'bg-raise': 'var(--bg-raise)',
        surface: 'var(--surface)',
        'surface-2': 'var(--surface-2)',
        border: 'var(--border)',
        text: 'var(--text)',
        'text-muted': 'var(--text-muted)',
        'text-dim': 'var(--text-dim)',
        accent: 'var(--accent)',
        live: 'var(--live)',
        warn: 'var(--warn)',
        danger: 'var(--danger)',
      },
      fontFamily: {
        display: ['var(--display)'],
        body: ['var(--body)'],
        mono: ['var(--mono)'],
      },
      maxWidth: {
        site: 'var(--maxw)',
      },
      borderRadius: {
        site: 'var(--radius)',
        'site-sm': 'var(--radius-sm)',
      },
    },
  },
  plugins: [],
};

export default config;
