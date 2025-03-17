
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface CharacterStats {
  name: string;
  age?: string | number;
  height?: string;
  traits: string[];
}

interface CharacterImage {
  url: string;
  caption?: string;
}

interface CharacterTabletProps {
  image: string;
  stats: CharacterStats;
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
  const contentRef = useRef<HTMLDivElement>(null);
  
  const handleScroll = () => {
    if (!contentRef.current) return;
    
    const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
    // If user has scrolled to near bottom, mark as read
    if (scrollTop + clientHeight >= scrollHeight - 20) {
      setHasReadFully(true);
    }
  };
  
  useEffect(() => {
    // Reset read state when description changes
    setHasReadFully(false);
  }, [description]);
  
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
          <div className="h-full flex flex-col">
            <div className="relative h-72 overflow-hidden rounded-t-xl">
              <img 
                src={image} 
                alt={stats.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                <span className={cn(
                  "category-pill",
                  `${category}-tag`
                )}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </span>
              </div>
            </div>
            
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-2">{stats.name}</h3>
              <div className="space-y-1 text-sm text-muted-foreground">
                {stats.age && <p><span className="font-medium">Age:</span> {stats.age}</p>}
                {stats.height && <p><span className="font-medium">Height:</span> {stats.height}</p>}
              </div>
              
              <div className="mt-4">
                <h4 className="text-sm font-medium mb-2">Traits</h4>
                <div className="flex flex-wrap gap-1">
                  {stats.traits.map((trait, index) => (
                    <span 
                      key={index}
                      className="text-xs px-2 py-1 bg-secondary rounded-md"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-auto text-center pt-4">
                <p className="text-sm text-muted-foreground">Click to view description</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Back side - Full character description with images */}
        <div 
          className="absolute inset-0 backface-hidden rotate-y-180"
          style={{ 
            backfaceVisibility: "hidden", 
            transform: "rotateY(180deg)"
          }}
        >
          <div className="character-tablet-content h-full flex flex-col">
            <h3 className="text-xl font-bold mb-1">{stats.name}</h3>
            <div 
              ref={contentRef}
              className="overflow-y-auto flex-1 text-sm text-muted-foreground space-y-4 pr-1"
              onScroll={handleScroll}
            >
              <p>{description}</p>
              
              {/* Additional character images */}
              {additionalImages.length > 0 && (
                <div className="space-y-3 mt-4">
                  <h4 className="font-medium text-sm">Gallery</h4>
                  {additionalImages.map((img, index) => (
                    <div key={index} className="space-y-1">
                      <div className="border rounded-md overflow-hidden">
                        <AspectRatio ratio={16/9}>
                          <img 
                            src={img.url} 
                            alt={img.caption || `${stats.name} image ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </AspectRatio>
                      </div>
                      {img.caption && (
                        <p className="text-xs text-center text-muted-foreground px-2">{img.caption}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="mt-4 pt-2 border-t text-center">
              <p className="text-sm text-muted-foreground">Click to flip back</p>
            </div>
          </div>
        </div>
        
        {/* Sparkle effect overlay */}
        <div className="sparkle-effect" />
      </div>
    </motion.div>
  );
}
