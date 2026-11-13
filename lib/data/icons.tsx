// Line-art cover icons for each project card. Rendered inside <IconDraw>,
// which handles the scroll-triggered "stroke draw-in" animation via CSS
// (see .icon-draw rules in globals.css) so the visual behavior matches the
// original HTML pixel for pixel.

export const ICONS: Record<string, JSX.Element> = {
  taxi: (
    <svg viewBox="0 0 120 90" fill="none">
      <path d="M10 70 C 30 20, 70 20, 108 52" stroke="var(--text-dim)" strokeWidth="2" strokeDasharray="5 6" pathLength={1} />
      <circle cx="10" cy="70" r="5" stroke="var(--tint)" strokeWidth="3" pathLength={1} />
      <rect x="70" y="36" width="32" height="15" rx="4" stroke="var(--tint)" strokeWidth="3" pathLength={1} />
      <path d="M76 36 L80 27 H92 L96 36" stroke="var(--tint)" strokeWidth="3" pathLength={1} />
      <circle cx="77" cy="53" r="3" fill="var(--tint)" />
      <circle cx="95" cy="53" r="3" fill="var(--tint)" />
    </svg>
  ),
  delivery: (
    <svg viewBox="0 0 120 90" fill="none">
      <rect x="42" y="28" width="40" height="34" rx="4" stroke="var(--tint)" strokeWidth="3" pathLength={1} />
      <path d="M42 42 H82 M62 28 V62" stroke="var(--tint)" strokeWidth="2" pathLength={1} />
      <path d="M12 40 H30 M8 50 H26 M12 60 H30" stroke="var(--text-dim)" strokeWidth="3" strokeLinecap="round" pathLength={1} />
    </svg>
  ),
  hrm: (
    <svg viewBox="0 0 120 90" fill="none">
      <circle cx="60" cy="24" r="9" stroke="var(--tint)" strokeWidth="3" pathLength={1} />
      <circle cx="28" cy="64" r="9" stroke="var(--tint)" strokeWidth="3" pathLength={1} />
      <circle cx="92" cy="64" r="9" stroke="var(--tint)" strokeWidth="3" pathLength={1} />
      <path d="M60 33 V46 M60 46 L28 55 M60 46 L92 55" stroke="var(--text-dim)" strokeWidth="2" pathLength={1} />
    </svg>
  ),
  trophy: (
    <svg viewBox="0 0 120 90" fill="none">
      <path d="M45 18 H75 V32 C75 44 66 50 60 50 C54 50 45 44 45 32 Z" stroke="var(--tint)" strokeWidth="3" pathLength={1} />
      <path d="M45 22 C34 22 34 38 46 38 M75 22 C86 22 86 38 74 38" stroke="var(--tint)" strokeWidth="2.5" pathLength={1} />
      <path d="M60 50 V62 M49 70 H71 M51 62 H69" stroke="var(--text-dim)" strokeWidth="2.5" pathLength={1} />
    </svg>
  ),
  legal: (
    <svg viewBox="0 0 120 90" fill="none">
      <path d="M60 14 V64 M38 74 H82" stroke="var(--text-dim)" strokeWidth="3" pathLength={1} />
      <path d="M28 28 H60 M92 28 H60" stroke="var(--tint)" strokeWidth="2.5" pathLength={1} />
      <path d="M18 28 L28 48 C20 54 16 54 10 48 Z M102 28 L112 48 C104 54 100 54 94 48 Z" stroke="var(--tint)" strokeWidth="2.5" pathLength={1} />
    </svg>
  ),
  auction: (
    <svg viewBox="0 0 120 90" fill="none">
      <rect x="26" y="42" width="34" height="14" rx="3" transform="rotate(-30 43 49)" stroke="var(--tint)" strokeWidth="3" pathLength={1} />
      <path d="M42 58 L26 74" stroke="var(--tint)" strokeWidth="3" pathLength={1} />
      <path d="M16 76 H56" stroke="var(--text-dim)" strokeWidth="3" pathLength={1} />
      <path d="M78 64 L90 48 L102 58 L112 36" stroke="var(--tint)" strokeWidth="2.5" pathLength={1} />
    </svg>
  ),
  game: (
    <svg viewBox="0 0 120 90" fill="none">
      <rect x="24" y="32" width="72" height="30" rx="14" stroke="var(--tint)" strokeWidth="3" pathLength={1} />
      <path d="M42 40 V54 M35 47 H49" stroke="var(--text-dim)" strokeWidth="2.5" strokeLinecap="round" pathLength={1} />
      <circle cx="76" cy="42" r="3" fill="var(--tint)" />
      <circle cx="86" cy="52" r="3" fill="var(--tint)" />
    </svg>
  ),
  shark: (
    <svg viewBox="0 0 120 90" fill="none">
      <path d="M14 54 C 34 30, 70 26, 106 44 C 88 50, 60 50, 40 46 C 30 52, 22 56, 14 54 Z" stroke="var(--tint)" strokeWidth="3" pathLength={1} />
      <path d="M60 26 L66 40 L52 40 Z" stroke="var(--tint)" strokeWidth="2.5" pathLength={1} />
      <circle cx="86" cy="42" r="2" fill="var(--tint)" />
    </svg>
  ),
  education: (
    <svg viewBox="0 0 120 90" fill="none">
      <path d="M60 22 L104 38 L60 54 L16 38 Z" stroke="var(--tint)" strokeWidth="3" pathLength={1} />
      <path d="M36 46 V64 C36 68 48 72 60 72 C72 72 84 68 84 64 V46" stroke="var(--text-dim)" strokeWidth="2.5" pathLength={1} />
    </svg>
  ),
  ecommerce: (
    <svg viewBox="0 0 120 90" fill="none">
      <path d="M30 34 H90 L84 62 H36 Z" stroke="var(--tint)" strokeWidth="3" pathLength={1} />
      <path d="M42 34 L48 18 H72 L78 34" stroke="var(--tint)" strokeWidth="2.5" pathLength={1} />
      <circle cx="46" cy="72" r="4" stroke="var(--text-dim)" strokeWidth="2.5" pathLength={1} />
      <circle cx="76" cy="72" r="4" stroke="var(--text-dim)" strokeWidth="2.5" pathLength={1} />
    </svg>
  ),
  dashboard: (
    <svg viewBox="0 0 120 90" fill="none">
      <rect x="16" y="20" width="88" height="50" rx="5" stroke="var(--tint)" strokeWidth="3" pathLength={1} />
      <path d="M30 56 V38 M50 56 V30 M70 56 V44 M90 56 V34" stroke="var(--text-dim)" strokeWidth="2.5" strokeLinecap="round" pathLength={1} />
    </svg>
  ),
  store: (
    <svg viewBox="0 0 120 90" fill="none">
      <path d="M22 36 L28 18 H92 L98 36" stroke="var(--tint)" strokeWidth="3" pathLength={1} />
      <rect x="26" y="36" width="68" height="38" rx="3" stroke="var(--tint)" strokeWidth="2.5" pathLength={1} />
      <path d="M50 74 V54 H70 V74" stroke="var(--text-dim)" strokeWidth="2.5" pathLength={1} />
    </svg>
  ),
  leaf: (
    <svg viewBox="0 0 120 90" fill="none">
      <path d="M28 66 C 20 34, 54 16, 92 22 C 88 58, 56 74, 28 66 Z" stroke="var(--tint)" strokeWidth="3" pathLength={1} />
      <path d="M30 65 C 48 50, 66 38, 90 24" stroke="var(--text-dim)" strokeWidth="2.2" pathLength={1} />
    </svg>
  ),
  scrap: (
    <svg viewBox="0 0 120 90" fill="none">
      <rect x="24" y="26" width="26" height="26" rx="3" transform="rotate(-8 37 39)" stroke="var(--tint)" strokeWidth="2.5" pathLength={1} />
      <rect x="54" y="40" width="30" height="24" rx="3" transform="rotate(6 69 52)" stroke="var(--tint)" strokeWidth="2.5" pathLength={1} />
      <path d="M18 70 H100" stroke="var(--text-dim)" strokeWidth="3" pathLength={1} />
    </svg>
  ),
};

export const ABOUT_MOTIF = (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="38" r="17" stroke="var(--accent)" strokeWidth="3" pathLength={1} />
    <path d="M28 98 C28 76 42 64 60 64 C78 64 92 76 92 98" stroke="var(--accent)" strokeWidth="3" pathLength={1} />
    <path d="M12 38 L22 38 M98 38 L108 38" stroke="var(--live)" strokeWidth="3" strokeLinecap="round" pathLength={1} />
  </svg>
);

export const CONTACT_MOTIF = (
  <svg viewBox="0 0 120 90" fill="none">
    <rect x="15" y="20" width="90" height="55" rx="6" stroke="var(--accent)" strokeWidth="3" pathLength={1} />
    <path d="M15 26 L60 55 L105 26" stroke="var(--live)" strokeWidth="3" pathLength={1} />
  </svg>
);

export const STACK_ICONS: Record<string, JSX.Element> = {
  backend: (
    <svg viewBox="0 0 40 40" fill="none">
      <rect x="7" y="5" width="26" height="10" rx="2" stroke="var(--accent)" strokeWidth="2" pathLength={1} />
      <rect x="7" y="18" width="26" height="10" rx="2" stroke="var(--accent)" strokeWidth="2" pathLength={1} />
      <circle cx="12" cy="10" r="1.3" fill="var(--live)" />
      <circle cx="12" cy="23" r="1.3" fill="var(--live)" />
    </svg>
  ),
  frontend: (
    <svg viewBox="0 0 40 40" fill="none">
      <rect x="5" y="7" width="30" height="21" rx="2" stroke="var(--accent)" strokeWidth="2" pathLength={1} />
      <path d="M5 13 H35" stroke="var(--accent)" strokeWidth="2" pathLength={1} />
      <circle cx="9" cy="10" r="1" fill="var(--live)" />
    </svg>
  ),
  database: (
    <svg viewBox="0 0 40 40" fill="none">
      <ellipse cx="20" cy="10" rx="12" ry="4" stroke="var(--accent)" strokeWidth="2" pathLength={1} />
      <path d="M8 10 V28 C8 30 13 32 20 32 C27 32 32 30 32 28 V10" stroke="var(--accent)" strokeWidth="2" pathLength={1} />
      <path d="M8 19 C8 21 13 23 20 23 C27 23 32 21 32 19" stroke="var(--text-dim)" strokeWidth="1.6" pathLength={1} />
    </svg>
  ),
  devops: (
    <svg viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="6" stroke="var(--accent)" strokeWidth="2" pathLength={1} />
      <path d="M20 5 V10 M20 30 V35 M5 20 H10 M30 20 H35 M9 9 L12.5 12.5 M27.5 27.5 L31 31 M31 9 L27.5 12.5 M12.5 27.5 L9 31" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" pathLength={1} />
    </svg>
  ),
};
