
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface CharacterTraitsProps {
  traits: string[];
}

export function CharacterTraits({ traits }: CharacterTraitsProps) {
  return (
    <div className="mt-4">
      <h4 className="text-sm font-medium mb-2 flex items-center gap-1">
        Traits
        <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
      </h4>
      <div className="flex flex-wrap gap-1">
        {traits.map((trait, index) => (
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
  );
}
