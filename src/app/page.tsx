import Hero from '@/components/sections/Hero';
import HowItWorks from '@/components/sections/HowItWorks';
import Gallery from '@/components/sections/Gallery';
import Products from '@/components/sections/Products';
import Pricing from '@/components/sections/Pricing';
import OurStory from '@/components/sections/OurStory';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Gallery />
      <Products />
      <Pricing />
      <OurStory />
      <FAQ />
      <FinalCTA />
    </>
  );
}
