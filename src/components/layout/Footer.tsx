import React from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import { Camera, Globe } from 'lucide-react';

const links = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Our Work', href: '/#gallery' },
    { name: 'Products', href: '/#products' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'Our Story', href: '/#our-story' },
    { name: 'FAQ', href: '/#faq' },
  ],
  forms: [
    { name: 'Request a Design', href: '/request-design' },
    { name: 'Place an Order', href: '/order' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark-overlay border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and About */}
          <div className="lg:col-span-1">
            <Link href="/" className="relative w-48 h-12 block mb-6">
              <NextImage
                src="/images/main_logo.jpeg"
                alt="The Jersey Joint"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 192px, 192px"
              />
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-width-xs">
              Australia's premier custom basketball uniform maker. 100% custom designs, built for performance and style.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-barlow font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {links.main.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-text-muted hover:text-gold transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-barlow font-bold mb-6">Get Started</h4>
            <ul className="space-y-4">
              {links.forms.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-text-muted hover:text-gold transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-white font-barlow font-bold mb-6">Connect</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-dark-primary transition-all duration-300">
                <Camera size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-dark-primary transition-all duration-300">
                <Globe size={20} />
              </a>
            </div>
            <p className="text-text-muted text-sm">
              Email: info@thejerseyjoint.com.au
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-text-muted text-xs">
          <p>© {new Date().getFullYear()} The Jersey Joint. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
