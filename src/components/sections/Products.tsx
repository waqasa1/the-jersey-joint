import React from 'react';
import NextImage from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { ShoppingBag, Shirt, User, Layout, Wind } from 'lucide-react';

const extendedRange = [
  { name: 'BAGS', description: 'Custom sports bags — matching your uniform', icon: ShoppingBag },
  { name: 'POLOS', description: 'Team polos for coaches & staff', icon: Shirt },
  { name: 'HOODIES', description: 'Custom hoodies — same sublimation quality', icon: Layout },
  { name: 'SHOOTING SHIRTS', description: 'Warm-up shooting shirts', icon: Wind },
];

export default function Products() {
  return (
    <section id="products" className="py-24 md:py-32 bg-dark-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          label="OFFERING"
          title="WHAT WE MAKE"
          subtitle="Basketball uniforms are our core. But we kit out your whole team."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Main Product Card */}
          <div className="lg:col-span-2 relative h-[500px] md:h-[600px] rounded-[6px] overflow-hidden group">
            <NextImage
              src="/images/jersey4.jpeg"
              alt="Basketball Uniforms"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-3xl md:text-5xl font-barlow font-extrabold italic text-white mb-6">
                BASKETBALL <br /><span className="text-gold">UNIFORMS</span>
              </h3>
              <ul className="space-y-3 mb-10 text-white/80 max-w-md">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span>100% custom sublimation — any colour, any design</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span>Full set: jersey + shorts</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span>Player name, number, team logo included</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span>Moisture-wicking performance fabric</span>
                </li>
              </ul>
              <Button href="/request-design" className="w-fit" glow>
                REQUEST A DESIGN
              </Button>
            </div>
          </div>

          {/* Side Card / Info */}
          <div className="bg-dark-tertiary p-8 md:p-10 rounded-[6px] border border-white/5 flex flex-col justify-center">
            <h4 className="text-xl font-barlow font-bold mb-6 text-gold">THE QUALITY</h4>
            <p className="text-text-secondary mb-8 leading-relaxed">
              We use premium-grade, breathable fabrics designed for high-intensity athletics. 
              Our sublimation process ensures your design never fades, cracks, or peels.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 bg-white/5 rounded-full flex items-center justify-center text-gold">
                  <User size={20} />
                </div>
                <div>
                  <p className="font-bold text-sm">PLAYER FOCUS</p>
                  <p className="text-text-muted text-xs">Built for comfort and range of motion.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 bg-white/5 rounded-full flex items-center justify-center text-gold">
                  <Shirt size={20} />
                </div>
                <div>
                  <p className="font-bold text-sm">REVERSIBLE OPTIONS</p>
                  <p className="text-text-muted text-xs">Two designs in one set for home & away.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Extended Range Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {extendedRange.map((product, index) => (
            <div key={index} className="bg-dark-primary p-8 rounded-[6px] border border-white/5 hover:border-gold/30 transition-all duration-300">
              <product.icon className="text-gold mb-6" size={32} />
              <h4 className="text-lg font-barlow font-bold mb-3">{product.name}</h4>
              <p className="text-text-muted text-sm">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
