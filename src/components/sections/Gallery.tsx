'use client';

import React from 'react';
import NextImage from 'next/image';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';

const images = [
  { src: '/images/jersey1.jpeg', alt: 'Thunder Jersey Close-up', span: 'col-span-1 row-span-2' },
  { src: '/images/team1.jpeg', alt: 'Team in Uniforms', span: 'col-span-2 row-span-2' },
  { src: '/images/bag1.jpeg', alt: 'Custom Basketball Bag', span: 'col-span-1 row-span-1' },
  { src: '/images/jersey2.jpeg', alt: 'Jersey Design Detail', span: 'col-span-1 row-span-1' },
  { src: '/images/team2.jpeg', alt: 'Team Action Shot', span: 'col-span-2 row-span-1' },
  { src: '/images/jersey3.jpeg', alt: 'Basketball Uniform Front', span: 'col-span-1 row-span-1' },
  { src: '/images/jersey4.jpeg', alt: 'Basketball Uniform Back', span: 'col-span-1 row-span-1' },
  { src: '/images/medal1.jpeg', alt: 'Championship Medal', span: 'col-span-1 row-span-1' },
  { src: '/images/team3.jpeg', alt: 'Team Celebration', span: 'col-span-1 row-span-1' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-dark-primary">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          label="OUR WORK"
          title="SHOWCASE"
          subtitle="Custom uniforms we've brought to life for teams across Australia."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-[4px] ${image.span}`}
            >
              <NextImage
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white text-xs font-bold tracking-widest uppercase">
                  {image.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
