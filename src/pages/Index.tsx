
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { FeaturedSection } from '@/components/home/FeaturedSection';
import { CTASection } from '@/components/home/CTASection';
import { featuredAnime, featuredDisney, featuredOthers } from '@/data/featuredCharacters';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <HeroSection />
      
      <div className="fancy-container">
        <h2 id="featured-characters" className="text-3xl font-bold mb-8 fancy-text centered-content">
          Featured Character Collections
        </h2>
        <div className="responsive-container">
          <FeaturedSection 
            animeCharacters={featuredAnime}
            disneyCharacters={featuredDisney}
            otherCharacters={featuredOthers}
          />
        </div>
      </div>
      
      <CTASection />
      
      <Footer />
    </div>
  );
};

export default Index;
