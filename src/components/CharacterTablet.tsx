
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { CharacterTabletFront } from './character/CharacterTabletFront';
import { CharacterTabletBack } from './character/CharacterTabletBack';

interface CharacterImage {
  url: string;
  caption?: string;
}

interface CharacterTabletProps {
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

export function CharacterTablet({ 
  image, 
  stats, 
  description,
  additionalImages = [],
  category 
}: CharacterTabletProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [hasReadFully, setHasReadFully] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  
  useEffect(() => {
    // Reset read state when description changes
    setHasReadFully(false);
  }, [description]);
  
  const handleFavoriteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };
  
  const handleReadComplete = () => {
    setHasReadFully(true);
  };
  
  return (
    <motion.div
      className={cn(
        "character-tablet w-full sm:w-80 h-[500px] mx-auto cursor-pointer",
        hasReadFully && "sparkle-active"
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        className={cn(
          "w-full h-full transition-all duration-500 preserve-3d",
          isFlipped ? "rotate-y-180" : ""
        )}
        style={{ 
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" 
        }}
      >
        {/* Front side - Character image and basic stats */}
        <div 
          className="absolute inset-0 backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <CharacterTabletFront 
            image={image}
            stats={stats}
            category={category}
            isFavorite={isFavorite}
            onFavoriteToggle={handleFavoriteToggle}
          />
        </div>
        
        {/* Back side - Full character description with images */}
        <div 
          className="absolute inset-0 backface-hidden rotate-y-180"
          style={{ 
            backfaceVisibility: "hidden", 
            transform: "rotateY(180deg)"
          }}
        >
          <CharacterTabletBack 
            stats={stats}
            description={description}
            additionalImages={additionalImages}
            onReadComplete={handleReadComplete}
          />
        </div>
        
        {/* Sparkle effect overlay */}
        <div className="sparkle-effect" />
      </div>
    </motion.div>
  );
}
