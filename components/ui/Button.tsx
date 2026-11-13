import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

type Variant = 'primary' | 'ghost';

interface CommonProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

type AnchorButtonProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a'; href: string };

type NativeButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' };

type ButtonProps = AnchorButtonProps | NativeButtonProps;

export function Button(props: ButtonProps) {
  const { variant = 'primary', children, className } = props;
  const cls = clsx('btn', variant === 'primary' ? 'btn-primary' : 'btn-ghost', className);

  if (props.as === 'a') {
    const { as, variant: _v, className: _c, children: _ch, ...rest } = props;
    return (
      <a className={cls} {...rest}>
        {children}
      </a>
    );
  }

  const { as, variant: _v, className: _c, children: _ch, ...rest } = props as NativeButtonProps;
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
