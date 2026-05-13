import React from 'react';
import { cn } from '@/lib/cn';

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(
      'mb-12 md:mb-16',
      align === 'center' ? 'text-center' : 'text-left',
      className
    )}>
      <span className="text-gold text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
        {label}
      </span>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-barlow font-extrabold italic leading-tight mb-6">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto font-sans leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
