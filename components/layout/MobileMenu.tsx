'use client';

import clsx from 'clsx';
import { Navigation } from './Navigation';

interface MobileMenuProps {
  open: boolean;
  active: string;
  onClose: () => void;
}

export function MobileMenu({ open, active, onClose }: MobileMenuProps) {
  return (
    <div className={clsx('mobilemenu', open && 'open')} id="mobileMenu">
      <Navigation active={active} onNavigate={onClose} variant="mobile" />
    </div>
  );
}
