'use client';

import React from 'react';
import NextImage from 'next/image';
import { motion, Variants } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlays */}
      <div className="absolute inset-0 z-0">
        <NextImage
          src="/images/jersey1.jpeg"
          alt="The Jersey Joint Hero"
          fill
          loading="eager"
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-dark-primary/60 to-dark-primary" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.span 
            variants={itemVariants}
            className="inline-block text-gold text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-6"
          >
            AUSTRALIA'S #1 CUSTOM BASKETBALL UNIFORMS
          </motion.span>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-barlow font-extrabold italic leading-[0.9] mb-8 text-white"
          >
            YOUR TEAM.<br />
            YOUR DESIGN.<br />
            <span className="text-gold">YOUR JERSEY.</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-text-secondary text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed font-sans"
          >
            Fully custom sublimated basketball uniforms built around your vision. 
            We design it, you approve it, we make it happen.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button href="/request-design" size="lg" glow>
              REQUEST A DESIGN
            </Button>
            <Button href="#gallery" variant="outline" size="lg">
              VIEW OUR WORK
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-text-muted text-[10px] uppercase tracking-widest font-bold">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-gold" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
