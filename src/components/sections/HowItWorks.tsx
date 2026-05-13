import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { Pencil, CheckCircle2, ClipboardList, FileText, Truck } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'REQUEST A DESIGN',
    description: "Tell us your vision — colours, style, logo. We'll mock it up for you.",
    icon: Pencil,
  },
  {
    number: '02',
    title: 'APPROVE YOUR DESIGN',
    description: "Review your custom design. We refine until it's perfect.",
    icon: CheckCircle2,
  },
  {
    number: '03',
    title: 'PLACE YOUR ORDER',
    description: "Happy with the design? Lock it in and place your order.",
    icon: ClipboardList,
  },
  {
    number: '04',
    title: 'APPROVE TECH SHEET',
    description: "Sign off on the final production-ready tech sheet.",
    icon: FileText,
  },
  {
    number: '05',
    title: 'MANUFACTURE & DELIVERY',
    description: "We manufacture your uniforms and deliver to your door.",
    icon: Truck,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-dark-secondary overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          label="THE PROCESS"
          title="HOW IT WORKS"
          subtitle="From first contact to court-ready — here's our simple process."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-gold/20 -translate-y-12 z-0" />

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center">
              {/* Large Background Number */}
              <span className="absolute top-0 text-[100px] font-barlow font-extrabold italic text-gold/5 leading-none -translate-y-8 select-none">
                {step.number}
              </span>

              {/* Icon Circle */}
              <div className="w-20 h-20 rounded-full bg-dark-tertiary border border-white/10 flex items-center justify-center mb-8 shadow-xl">
                <step.icon className="text-gold" size={32} />
              </div>

              {/* Text */}
              <h3 className="text-xl font-barlow font-bold mb-4">{step.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
