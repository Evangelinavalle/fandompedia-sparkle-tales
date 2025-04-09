
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CharacterGallery } from './CharacterGallery';
import { CharacterStats } from '@/types/category';

interface CharacterImage {
  url: string;
  caption?: string;
}

interface CharacterTabletBackProps {
  stats: CharacterStats;
  description: string;
  additionalImages?: CharacterImage[];
  onReadComplete: () => void;
}

export function CharacterTabletBack({
  stats,
  description,
  additionalImages = [],
  onReadComplete
}: CharacterTabletBackProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  
  const handleScroll = () => {
    if (!contentRef.current) return;
    
    const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
    // If user has scrolled to near bottom, mark as read
    if (scrollTop + clientHeight >= scrollHeight - 20) {
      onReadComplete();
    }
  };
  
  useEffect(() => {
    const currentRef = contentRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll);
      return () => currentRef.removeEventListener('scroll', handleScroll);
    }
  }, []);
  
  return (
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
      >
        <p className="leading-relaxed">{description}</p>
        
        <CharacterGallery name={stats.name} images={additionalImages} />
      </div>
      <motion.div 
        className="mt-4 pt-2 border-t text-center"
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <p className="text-sm text-muted-foreground">Click to flip back</p>
      </motion.div>
    </div>
  );
}
