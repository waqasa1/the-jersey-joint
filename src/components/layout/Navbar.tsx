'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/cn';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Our Work', href: '/#gallery' },
  { name: 'Products', href: '/#products' },
  { name: 'Pricing', href: '/#pricing' },
  { name: 'Our Story', href: '/#our-story' },
  { name: 'FAQ', href: '/#faq' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-dark-primary/95 backdrop-blur-md border-b border-white/10 py-4'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative w-40 h-10 md:w-48 md:h-12 transition-opacity hover:opacity-90">
          <NextImage
            src="/images/main_logo.jpeg"
            alt="The Jersey Joint"
            fill
            className="object-contain"
            loading="eager"
            sizes="(max-width: 768px) 160px, 192px"
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link
            href="/request-design"
            className="inline-flex items-center justify-center px-4 py-2 text-sm bg-gold text-dark-primary hover:bg-gold-light font-barlow font-bold uppercase transition-all duration-300 rounded-[6px] shadow-[0_0_20px_rgba(245,196,0,0.4)]"
          >
            REQUEST A DESIGN
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gold"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-dark-primary z-40 transition-transform duration-500 lg:hidden flex flex-col items-center justify-center space-y-8 p-6',
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-2xl font-bold text-white hover:text-gold transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        <Link
          href="/request-design"
          className="w-full inline-flex items-center justify-center px-10 py-5 text-lg bg-gold text-dark-primary hover:bg-gold-light font-barlow font-bold uppercase transition-all duration-300 rounded-[6px] shadow-[0_0_20px_rgba(245,196,0,0.4)]"
          onClick={() => setIsMenuOpen(false)}
        >
          REQUEST A DESIGN
        </Link>
      </div>
    </nav>
  );
}
