'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import { cn } from '@/lib/cn';
import { CheckCircle2 } from 'lucide-react';

export default function RequestDesignPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate submission
    await new Promise((r) => setTimeout(r, 1000));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-32 pb-24 bg-dark-primary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="text-gold" size={40} />
            </div>
            <h2 className="text-3xl md:text-4xl font-barlow font-extrabold italic text-white mb-6">
              REQUEST RECEIVED!
            </h2>
            <p className="text-text-secondary text-lg mb-10 leading-relaxed">
              Your design request has been received. We'll be in touch within 24 hours to discuss your vision.
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-dark-primary font-barlow font-bold uppercase rounded-[6px] hover:bg-gold-light transition-all"
            >
              BACK TO HOME
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const inputClasses = "w-full bg-dark-tertiary border border-white/10 rounded-[4px] px-4 py-3 text-white placeholder:text-text-muted focus:border-gold focus:ring-1 focus:ring-gold/30 outline-none transition-colors";
  const labelClasses = "text-xs font-bold uppercase tracking-widest text-text-muted block mb-2";

  return (
    <div className="min-h-screen pt-32 pb-24 bg-dark-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <SectionHeading
            label="GET STARTED"
            title="REQUEST A DESIGN"
            subtitle="Tell us about your vision. We'll create a custom mockup for free."
          />

          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-[6px] text-red-400 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-dark-secondary p-8 md:p-12 rounded-[6px] border border-white/10 space-y-6 shadow-2xl">
            {/* Contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className={labelClasses}>Full Name *</label>
                <input type="text" id="name" name="name" required className={inputClasses} placeholder="John Smith" />
              </div>
              <div>
                <label htmlFor="email" className={labelClasses}>Email Address *</label>
                <input type="email" id="email" name="email" required className={inputClasses} placeholder="john@example.com" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className={labelClasses}>Phone Number</label>
                <input type="tel" id="phone" name="phone" className={inputClasses} placeholder="04XX XXX XXX" />
              </div>
              <div>
                <label htmlFor="organisation" className={labelClasses}>Club / Team Name</label>
                <input type="text" id="organisation" name="organisation" className={inputClasses} placeholder="e.g. Thunder Basketball" />
              </div>
            </div>

            {/* Design Brief */}
            <div className="border-t border-white/5 pt-6">
              <h3 className="text-lg font-barlow font-bold text-gold mb-6">DESIGN BRIEF</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="primaryColour" className={labelClasses}>Primary Colour *</label>
                <input type="text" id="primaryColour" name="primaryColour" required className={inputClasses} placeholder="e.g. Navy Blue" />
              </div>
              <div>
                <label htmlFor="secondaryColours" className={labelClasses}>Secondary Colours</label>
                <input type="text" id="secondaryColours" name="secondaryColours" className={inputClasses} placeholder="e.g. White, Gold" />
              </div>
            </div>

            <div>
              <span className={labelClasses}>Uniform Style *</span>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
                {['Traditional', 'Modern', 'Retro', 'Not sure yet'].map((style) => (
                  <label key={style} className="flex items-center gap-2 cursor-pointer group">
                    <input type="radio" name="uniformStyle" value={style.toLowerCase().replace(/ /g, '-')} required
                      className="accent-gold w-4 h-4" />
                    <span className="text-sm text-text-secondary group-hover:text-white transition-colors">{style}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <span className={labelClasses}>Do you have a logo? *</span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2">
                {[
                  { label: "Yes — I'll send it", value: 'yes-will-send' },
                  { label: 'Yes — I need one designed', value: 'yes-need-design' },
                  { label: 'No logo', value: 'no' },
                ].map((opt) => (
                  <label key={opt.value} className="flex items-center gap-2 cursor-pointer group">
                    <input type="radio" name="hasLogo" value={opt.value} required className="accent-gold w-4 h-4" />
                    <span className="text-sm text-text-secondary group-hover:text-white transition-colors">{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="designNotes" className={labelClasses}>Design Notes / Inspiration</label>
              <textarea id="designNotes" name="designNotes" rows={4} maxLength={1000} className={inputClasses}
                placeholder="Any ideas, references, or specific things you'd like on the uniform..." />
              <p className="text-text-muted text-xs mt-1">Max 1000 characters</p>
            </div>

            {/* Order Intent */}
            <div className="border-t border-white/5 pt-6">
              <h3 className="text-lg font-barlow font-bold text-gold mb-6">ORDER DETAILS</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="quantity" className={labelClasses}>Approximate Quantity *</label>
                <select id="quantity" name="quantity" required className={inputClasses}>
                  <option value="">Select quantity</option>
                  <option value="1-5">1–5 sets</option>
                  <option value="6-10">6–10 sets</option>
                  <option value="11-20">11–20 sets</option>
                  <option value="21-50">21–50 sets</option>
                  <option value="50+">50+ sets</option>
                </select>
              </div>
              <div>
                <label htmlFor="timeline" className={labelClasses}>Timeline *</label>
                <select id="timeline" name="timeline" required className={inputClasses}>
                  <option value="">Select timeline</option>
                  <option value="asap">ASAP</option>
                  <option value="4-6-weeks">4–6 weeks</option>
                  <option value="6-8-weeks">6–8 weeks</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>

            <div>
              <span className={labelClasses}>Interested in additional items?</span>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
                {['Bags', 'Polos', 'Hoodies', 'Shooting Shirts'].map((item) => (
                  <label key={item} className="flex items-center gap-2 cursor-pointer group">
                    <input type="checkbox" name="additionalItems" value={item.toLowerCase().replace(/ /g, '-')}
                      className="accent-gold w-4 h-4" />
                    <span className="text-sm text-text-secondary group-hover:text-white transition-colors">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isLoading}
                className={cn(
                  "w-full inline-flex items-center justify-center px-10 py-5 text-lg bg-gold text-dark-primary font-barlow font-bold uppercase rounded-[6px] shadow-[0_0_20px_rgba(245,196,0,0.4)] transition-all duration-300",
                  isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-gold-light"
                )}
              >
                {isLoading ? 'SUBMITTING...' : 'SUBMIT REQUEST'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
