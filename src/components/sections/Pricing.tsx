import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';

const pricingItems = [
  { item: 'Full Uniform Set (Jersey + Shorts)', price: 'From $[XX] per set' },
  { item: 'Jersey Only', price: 'From $[XX]' },
  { item: 'Shorts Only', price: 'From $[XX]' },
  { item: 'Reversible Upgrade', price: '+$[XX] per set' },
  { item: 'Player Name + Number', price: 'Included' },
  { item: 'Team Logo (supplied by you)', price: 'Included' },
  { item: 'Custom Logo Design (we design)', price: '+$[XX]' },
  { item: 'Minimum Order', price: '[X] sets' },
  { item: 'Bags', price: 'From $[XX]' },
  { item: 'Polos', price: 'From $[XX]' },
  { item: 'Hoodies', price: 'From $[XX]' },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-dark-primary">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          label="INVESTMENT"
          title="PRICING"
          subtitle="Transparent pricing. No surprises. All prices in AUD."
        />

        <div className="max-w-4xl mx-auto">
          <div className="bg-dark-secondary rounded-[6px] border border-white/10 overflow-hidden shadow-2xl">
            {/* Header Row */}
            <div className="grid grid-cols-2 bg-gold p-6 md:p-8">
              <span className="text-dark-primary font-barlow font-extrabold italic uppercase tracking-wider">ITEM</span>
              <span className="text-dark-primary font-barlow font-extrabold italic uppercase tracking-wider text-right">PRICE</span>
            </div>

            {/* Pricing Rows */}
            <div className="divide-y divide-white/5">
              {pricingItems.map((row, index) => (
                <div key={index} className="grid grid-cols-2 p-6 md:p-8 hover:bg-white/5 transition-colors">
                  <span className="text-white font-medium text-sm md:text-base">{row.item}</span>
                  <span className="text-gold font-barlow font-bold italic text-right text-base md:text-lg">{row.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Notes */}
          <div className="mt-8 text-center space-y-4">
            <p className="text-text-muted text-sm italic">
              * Delivery calculated at order. GST [included/excluded — client to confirm].
            </p>
            <div className="bg-white/5 p-6 rounded-[6px] border border-white/5">
              <p className="text-white font-medium">
                Design is <span className="text-gold uppercase font-bold">FREE</span> when you place an order.
              </p>
              <p className="text-text-secondary text-sm mt-2">
                Invoicing is handled separately — we'll send you an invoice once your order is confirmed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
