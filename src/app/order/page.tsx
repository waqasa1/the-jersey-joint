'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import { cn } from '@/lib/cn';
import { CheckCircle2 } from 'lucide-react';

export default function OrderPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

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
              ORDER SUBMITTED!
            </h2>
            <p className="text-text-secondary text-lg mb-10 leading-relaxed">
              Your order has been received. We'll send you an invoice and finalise the tech sheet shortly.
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
            label="READY TO PLAY"
            title="PLACE YOUR ORDER"
            subtitle="You've got your approved design. Let's make it official."
          />

          {/* Info box */}
          <div className="mb-8 p-5 bg-gold/5 border border-gold/20 rounded-[6px] text-center">
            <p className="text-text-secondary text-sm">
              Haven't got an approved design yet?{' '}
              <Link href="/request-design" className="text-gold font-bold hover:text-gold-light transition-colors">
                Request a design first →
              </Link>
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-[6px] text-red-400 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-dark-secondary p-8 md:p-12 rounded-[6px] border border-white/10 space-y-6 shadow-2xl">
            {/* Contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="order-name" className={labelClasses}>Full Name *</label>
                <input type="text" id="order-name" name="name" required className={inputClasses} placeholder="John Smith" />
              </div>
              <div>
                <label htmlFor="order-email" className={labelClasses}>Email Address *</label>
                <input type="email" id="order-email" name="email" required className={inputClasses} placeholder="john@example.com" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="order-phone" className={labelClasses}>Phone Number *</label>
                <input type="tel" id="order-phone" name="phone" required className={inputClasses} placeholder="04XX XXX XXX" />
              </div>
              <div>
                <label htmlFor="order-org" className={labelClasses}>Club / Team Name</label>
                <input type="text" id="order-org" name="organisation" className={inputClasses} placeholder="e.g. Thunder Basketball" />
              </div>
            </div>

            {/* Order Details */}
            <div className="border-t border-white/5 pt-6">
              <h3 className="text-lg font-barlow font-bold text-gold mb-6">ORDER DETAILS</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="designRef" className={labelClasses}>Design Reference</label>
                <input type="text" id="designRef" name="designRef" className={inputClasses}
                  placeholder="e.g. Magic Basketball — approved April 2024" />
              </div>
              <div>
                <label htmlFor="order-quantity" className={labelClasses}>Total Quantity *</label>
                <input type="number" id="order-quantity" name="quantity" required min="1" className={inputClasses} placeholder="e.g. 15" />
              </div>
            </div>

            <div className="bg-dark-tertiary/50 p-4 rounded-[4px] border border-white/5">
              <p className="text-text-muted text-xs">
                <strong className="text-white">Player List:</strong> You can send player names, numbers and sizes via email after submission.
              </p>
            </div>

            {/* Delivery */}
            <div className="border-t border-white/5 pt-6">
              <h3 className="text-lg font-barlow font-bold text-gold mb-6">DELIVERY</h3>
            </div>

            <div>
              <label htmlFor="deliveryAddress" className={labelClasses}>Delivery Address *</label>
              <textarea id="deliveryAddress" name="deliveryAddress" required rows={2} className={inputClasses}
                placeholder="Full delivery address" />
            </div>

            <div>
              <label htmlFor="deliveryState" className={labelClasses}>State *</label>
              <select id="deliveryState" name="deliveryState" required className={inputClasses}>
                <option value="">Select state</option>
                {['NSW', 'VIC', 'QLD', 'SA', 'WA', 'TAS', 'NT', 'ACT'].map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Additional */}
            <div>
              <span className={labelClasses}>Any additional items?</span>
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

            <div>
              <label htmlFor="additionalNotes" className={labelClasses}>Additional Notes</label>
              <textarea id="additionalNotes" name="additionalNotes" rows={3} maxLength={500} className={inputClasses}
                placeholder="Any other information..." />
            </div>

            {/* Agreement */}
            <div className="border-t border-white/5 pt-6">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input type="checkbox" name="agreeTechSheet" required className="accent-gold w-5 h-5 mt-0.5 shrink-0" />
                <span className="text-sm text-text-secondary group-hover:text-white transition-colors">
                  I understand I will need to approve a final tech sheet before manufacture begins *
                </span>
              </label>
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
                {isLoading ? 'SUBMITTING...' : 'PLACE ORDER'}
              </button>
            </div>

            <p className="text-center text-text-muted text-xs">
              Note: Invoicing is handled separately after order confirmation.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
