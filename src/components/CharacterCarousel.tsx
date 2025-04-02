
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { CharacterTablet } from '@/components/CharacterTablet';

interface CharacterImage {
  url: string;
  caption?: string;
}

interface Character {
  id: string;
  image: string;
  stats: {
    name: string;
    age?: string | number;
    height?: string;
    traits: string[];
  };
  description: string;
  additionalImages?: CharacterImage[];
  category: 'anime' | 'disney' | 'ghibli' | 'manhwa' | 'asian';
}

interface CharacterCarouselProps {
  characters: Character[];
  title: string;
}

export function CharacterCarousel({ characters, title }: CharacterCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Set the width of the carousel
  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, [characters]);
  
  // Function to handle moving to next and previous slides
  const handlePrev = () => {
    const itemsPerView = Math.floor(window.innerWidth / 320) || 1;
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? characters.length - itemsPerView : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    const itemsPerView = Math.floor(window.innerWidth / 320) || 1;
    setCurrentIndex((prevIndex) => 
      prevIndex >= characters.length - itemsPerView ? 0 : prevIndex + 1
    );
  };
  
  // Calculate drag constraints
  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) {
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
      }
    };
    
    window.addEventListener('resize', updateWidth);
    updateWidth();
    
    return () => window.removeEventListener('resize', updateWidth);
  }, [characters]);
  
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex items-center mb-8 relative"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold relative">
            {title}
            <motion.span 
              className="absolute -top-4 -right-8 text-2xl"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Sparkles className="h-5 w-5 text-yellow-400" />
            </motion.span>
          </h2>
          <motion.div 
            className="ml-4 h-1 bg-gradient-to-r from-primary/50 to-transparent flex-grow rounded-full"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "100%", opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
        </motion.div>
        
        <div className="relative">
          <motion.div 
            ref={carouselRef}
            className="overflow-hidden"
          >
            <motion.div
              className="flex gap-6 py-4"
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              initial={{ x: 0 }}
              animate={{ x: -currentIndex * 320 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              {characters.map((character, index) => (
                <motion.div 
                  key={character.id}
                  className="min-w-[280px] select-none"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <CharacterTablet 
                    image={character.image}
                    stats={character.stats}
                    description={character.description}
                    additionalImages={character.additionalImages}
                    category={character.category}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.button 
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/60 rounded-full p-3 shadow-md hover:bg-white dark:hover:bg-black/80 transition-colors z-10"
            onClick={handlePrev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <ChevronLeft className="h-6 w-6" />
          </motion.button>
          
          <motion.button 
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/60 rounded-full p-3 shadow-md hover:bg-white dark:hover:bg-black/80 transition-colors z-10"
            onClick={handleNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <ChevronRight className="h-6 w-6" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
