
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CharacterTablet } from '@/components/CharacterTablet';

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
        <h2 className="text-2xl font-bold mb-6">{title}</h2>
        
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
              {characters.map((character) => (
                <motion.div 
                  key={character.id}
                  className="min-w-[280px] select-none"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <CharacterTablet 
                    image={character.image}
                    stats={character.stats}
                    description={character.description}
                    category={character.category}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/60 rounded-full p-2 shadow-md hover:bg-white dark:hover:bg-black/80 transition-colors z-10"
            onClick={handlePrev}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/60 rounded-full p-2 shadow-md hover:bg-white dark:hover:bg-black/80 transition-colors z-10"
            onClick={handleNext}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
