import React from 'react';
import Button from '@/components/ui/Button';

export default function FinalCTA() {
  return (
    <section id="contact" className="relative py-24 md:py-40 overflow-hidden">
      {/* Background Image with Heavy Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-fixed bg-center"
        style={{ backgroundImage: "url('/images/team2.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/85" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-barlow font-extrabold italic text-white mb-8 leading-tight">
            READY TO LOOK <br /><span className="text-gold">LIKE CHAMPIONS?</span>
          </h2>
          <p className="text-text-secondary text-lg md:text-xl mb-12 font-sans">
            Let's build your uniform. Request a free design — no commitment. 
            Join the hundreds of teams already kitted out by The Jersey Joint.
          </p>
          <Button href="/request-design" size="lg" glow>
            REQUEST YOUR DESIGN NOW
          </Button>
        </div>
      </div>
    </section>
  );
}
