
import { motion } from 'framer-motion';
import { CharacterImage } from './CharacterImage';
import { CharacterTraits } from './CharacterTraits';
import { CharacterStats } from '@/types/category';

interface CharacterTabletFrontProps {
  image: string;
  stats: CharacterStats;
  category: 'anime' | 'disney' | 'ghibli' | 'manhwa' | 'asian';
  isFavorite: boolean;
  onFavoriteToggle: (e: React.MouseEvent) => void;
}

export function CharacterTabletFront({
  image,
  stats,
  category,
  isFavorite,
  onFavoriteToggle
}: CharacterTabletFrontProps) {
  return (
    <div className="h-full flex flex-col">
      <CharacterImage 
        imageSrc={image} 
        name={stats.name} 
        category={category} 
        isFavorite={isFavorite} 
        onFavoriteToggle={onFavoriteToggle} 
      />
      
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
        
        <CharacterTraits traits={stats.traits} />
        
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
  );
}
