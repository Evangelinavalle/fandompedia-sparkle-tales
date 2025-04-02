
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Heart, Star } from 'lucide-react';

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
  const [isFavorite, setIsFavorite] = useState(false);
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
              <motion.img 
                src={image} 
                alt={stats.name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://static.wikia.nocookie.net/boruto/images/6/6c/Naruto_with_coat.png/revision/latest/scale-to-width-down/231?cb=20170917010747";
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                <span className={cn(
                  "category-pill",
                  `${category}-tag`
                )}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </span>
              </div>
              <motion.button
                className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm p-2 rounded-full text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFavorite(!isFavorite);
                }}
                whileTap={{ scale: 0.8 }}
              >
                <Heart className={cn("h-5 w-5", isFavorite ? "fill-red-500 text-red-500" : "")} />
              </motion.button>
            </div>
            
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-2 flex items-center">
                {stats.name}
                <motion.span 
                  className="ml-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  ✨
                </motion.span>
              </h3>
              <div className="space-y-1 text-sm text-muted-foreground">
                {stats.age && <p><span className="font-medium">Age:</span> {stats.age}</p>}
                {stats.height && <p><span className="font-medium">Height:</span> {stats.height}</p>}
              </div>
              
              <div className="mt-4">
                <h4 className="text-sm font-medium mb-2 flex items-center gap-1">
                  Traits
                  <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                </h4>
                <div className="flex flex-wrap gap-1">
                  {stats.traits.map((trait, index) => (
                    <motion.span 
                      key={index}
                      className="text-xs px-2 py-1 bg-secondary rounded-md shimmer"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      {trait}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              <div className="mt-auto text-center pt-4">
                <motion.p 
                  className="text-sm text-muted-foreground"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  Click to view description
                </motion.p>
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
            <h3 className="text-xl font-bold mb-1 flex items-center">
              {stats.name}
              <motion.span 
                className="ml-2"
                animate={{ 
                  rotate: [0, 10, -10, 10, 0],
                }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
              >
                ✨
              </motion.span>
            </h3>
            <div 
              ref={contentRef}
              className="overflow-y-auto flex-1 text-sm text-muted-foreground space-y-4 pr-1"
              onScroll={handleScroll}
            >
              <p className="leading-relaxed">{description}</p>
              
              {/* Additional character images */}
              {additionalImages.length > 0 && (
                <div className="space-y-3 mt-4">
                  <h4 className="font-medium text-sm">Gallery</h4>
                  {additionalImages.map((img, index) => (
                    <motion.div 
                      key={index} 
                      className="space-y-1"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 * index }}
                    >
                      <div className="border rounded-md overflow-hidden shadow-sm">
                        <AspectRatio ratio={16/9}>
                          <motion.img 
                            src={img.url} 
                            alt={img.caption || `${stats.name} image ${index + 1}`}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = "https://static.wikia.nocookie.net/boruto/images/6/6c/Naruto_with_coat.png/revision/latest/scale-to-width-down/231?cb=20170917010747";
                            }}
                          />
                        </AspectRatio>
                      </div>
                      {img.caption && (
                        <p className="text-xs text-center text-muted-foreground px-2">{img.caption}</p>
                      )}
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
            <motion.div 
              className="mt-4 pt-2 border-t text-center"
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <p className="text-sm text-muted-foreground">Click to flip back</p>
            </motion.div>
          </div>
        </div>
        
        {/* Sparkle effect overlay */}
        <div className="sparkle-effect" />
      </div>
    </motion.div>
  );
}
