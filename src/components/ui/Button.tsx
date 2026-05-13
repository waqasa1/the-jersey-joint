import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  glow?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, glow = false, children, onClick, ...props }, ref) => {
    const variants = {
      primary: 'bg-gold text-dark-primary hover:bg-gold-light font-barlow font-bold uppercase',
      secondary: 'bg-white text-dark-primary hover:bg-gray-100 font-barlow font-bold uppercase',
      outline: 'bg-transparent border border-white text-white hover:bg-white/10 font-barlow font-bold uppercase',
      ghost: 'bg-transparent text-white hover:bg-white/5',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-8 py-4 text-base',
      lg: 'px-10 py-5 text-lg',
    };

    const classes = cn(
      'inline-flex items-center justify-center transition-all duration-300 rounded-[6px] disabled:opacity-50 disabled:pointer-events-none',
      variants[variant],
      sizes[size],
      glow && variant === 'primary' && 'shadow-[0_0_20px_rgba(245,196,0,0.4)]',
      className
    );

    if (href) {
      return (
        <Link href={href} className={classes} onClick={onClick as any}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} onClick={onClick} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
