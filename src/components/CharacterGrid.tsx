
import { motion } from 'framer-motion';
import { CharacterTablet } from '@/components/CharacterTablet';

type Character = {
  id: string;
  image: string;
  stats: {
    name: string;
    age?: number | string;
    height?: string;
    traits: string[];
  };
  description: string;
  additionalImages?: Array<{
    url: string;
    caption: string;
  }>;
  category: 'anime' | 'disney' | 'ghibli' | 'manhwa' | 'asian';
};

interface CharacterGridProps {
  characters: Character[];
}

export const CharacterGrid = ({ characters }: CharacterGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
      {characters.map((character, index) => (
        <motion.div
          key={character.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
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
    </div>
  );
};
