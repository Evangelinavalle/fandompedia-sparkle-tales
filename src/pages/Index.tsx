
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { FeaturedSection } from '@/components/home/FeaturedSection';
import { CTASection } from '@/components/home/CTASection';
import { featuredAnime, featuredDisney } from '@/data/featuredCharacters';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <HeroSection />
      
      <FeaturedSection 
        animeCharacters={featuredAnime}
        disneyCharacters={featuredDisney}
      />
      
      <CTASection />
      
      <Footer />
    </div>
  );
};

export default Index;
