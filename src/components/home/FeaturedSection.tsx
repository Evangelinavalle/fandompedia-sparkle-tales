
import { CharacterCarousel } from '@/components/CharacterCarousel';
import { Character } from '@/types/category';

interface FeaturedSectionProps {
  animeCharacters: Character[];
  disneyCharacters: Character[];
  otherCharacters?: Character[];
}

export function FeaturedSection({ animeCharacters, disneyCharacters, otherCharacters = [] }: FeaturedSectionProps) {
  return (
    <>
      <section className="py-16 bg-gradient-to-r from-secondary/20 via-secondary/30 to-secondary/20">
        <CharacterCarousel 
          characters={animeCharacters} 
          title="Featured Anime Characters"
        />
      </section>
      
      <section className="py-16 bg-white dark:bg-background">
        <CharacterCarousel 
          characters={disneyCharacters} 
          title="Featured Disney Characters"
        />
      </section>
      
      {otherCharacters.length > 0 && (
        <section className="py-16 bg-gradient-to-r from-secondary/20 via-secondary/30 to-secondary/20">
          <CharacterCarousel 
            characters={otherCharacters} 
            title="Other Featured Characters"
          />
        </section>
      )}
    </>
  );
}
