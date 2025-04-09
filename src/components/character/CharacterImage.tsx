
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CharacterImageProps {
  imageSrc: string;
  name: string;
  category: string;
  isFavorite: boolean;
  onFavoriteToggle: (e: React.MouseEvent) => void;
}

export function CharacterImage({ 
  imageSrc, 
  name, 
  category, 
  isFavorite, 
  onFavoriteToggle 
}: CharacterImageProps) {
  return (
    <div className="relative h-72 overflow-hidden rounded-t-xl">
      <motion.img 
        src={imageSrc} 
        alt={name}
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
        onClick={onFavoriteToggle}
        whileTap={{ scale: 0.8 }}
      >
        <Heart className={cn("h-5 w-5", isFavorite ? "fill-red-500 text-red-500" : "")} />
      </motion.button>
    </div>
  );
}
