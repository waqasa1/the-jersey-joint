import React from 'react';
import NextImage from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';

const stats = [
  { value: '[XX]+', label: 'TEAMS KITTED' },
  { value: '[XX]+', label: 'UNIFORMS MADE' },
  { value: '[X]', label: 'YEARS IN THE GAME' },
];

export default function OurStory() {
  return (
    <section id="our-story" className="py-24 md:py-32 bg-dark-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <SectionHeading
              label="HOW IT STARTED"
              title="THE JERSEY JOINT STORY"
              align="left"
              className="mb-8"
            />
            
            <div className="space-y-6 text-text-secondary text-lg leading-relaxed font-sans mb-12">
              <p>
                Born from a love of the game. [PLACEHOLDER: How Jersey Joint started — 
                the founder's story, the gap in the market, the passion for the game.]
              </p>
              <p>
                [PLACEHOLDER: The mission — quality uniforms, simple process, 
                teams that look good and feel good.]
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 border-t border-white/10 pt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center md:text-left">
                  <p className="text-3xl md:text-5xl font-barlow font-extrabold italic text-gold leading-none mb-2">
                    {stat.value}
                  </p>
                  <p className="text-text-muted text-[10px] md:text-xs font-bold tracking-widest uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative aspect-square lg:aspect-[4/5] rounded-[6px] overflow-hidden shadow-2xl">
            <NextImage
              src="/images/team3.jpeg"
              alt="The Jersey Joint Team"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Texture Overlay */}
            <div className="absolute inset-0 bg-gold/10 mix-blend-overlay" />
          </div>
        </div>
      </div>
    </section>
  );
}
