'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { cn } from '@/lib/cn';

const faqs = [
  {
    q: 'How does the design process work?',
    a: "We start with a quick chat or design request — you tell us your colours, style and ideas. We create a custom mockup for you to review. Once you're happy, you approve the design and we move to the order stage.",
  },
  {
    q: 'Is the design free?',
    a: "Yes. Design is free when you place an order with us.",
  },
  {
    q: "What's the minimum order quantity?",
    a: '[PLACEHOLDER — client to confirm minimum order]',
  },
  {
    q: 'How long does it take?',
    a: '[PLACEHOLDER — client to confirm turnaround time]',
  },
  {
    q: 'Can I supply my own logo?',
    a: "Absolutely. Send us your logo files (preferably vector/PDF) and we'll incorporate them into your design.",
  },
  {
    q: 'Do you design logos as well?',
    a: 'Yes, we can design a team logo for an additional fee. Ask us when submitting your design request.',
  },
  {
    q: 'What fabric do you use?',
    a: '[PLACEHOLDER — client to provide fabric details]',
  },
  {
    q: 'Can I get reversible uniforms?',
    a: 'Yes, reversible uniforms are available for an additional cost per set.',
  },
  {
    q: 'How does payment work?',
    a: "We invoice separately once your order is confirmed and your tech sheet is approved. We do not take payment through the website.",
  },
  {
    q: 'Do you deliver Australia-wide?',
    a: 'Yes, we deliver to all states. Delivery costs are calculated at order.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 bg-dark-primary">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          label="QUESTIONS"
          title="FREQUENTLY ASKED"
          subtitle="Everything you need to know about getting kitted out by The Jersey Joint."
        />

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={cn(
                  "border rounded-[6px] transition-all duration-300",
                  isOpen ? "border-gold/50 bg-dark-secondary" : "border-white/10 hover:border-white/20"
                )}
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className={cn(
                    "font-bold transition-colors",
                    isOpen ? "text-gold" : "text-white"
                  )}>
                    {faq.q}
                  </span>
                  <div className={cn(
                    "shrink-0 transition-transform duration-300",
                    isOpen ? "rotate-180 text-gold" : "text-text-muted"
                  )}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-text-secondary text-sm leading-relaxed border-t border-white/5 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
