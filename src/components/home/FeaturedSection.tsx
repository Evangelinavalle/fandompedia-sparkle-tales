
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
        <div className="centered-content">
          <CharacterCarousel 
            characters={animeCharacters} 
            title="Featured Anime Characters"
          />
        </div>
      </section>
      
      <section className="py-16 bg-white dark:bg-background">
        <div className="centered-content">
          <CharacterCarousel 
            characters={disneyCharacters} 
            title="Featured Disney Characters"
          />
        </div>
      </section>
      
      {otherCharacters.length > 0 && (
        <section className="py-16 bg-gradient-to-r from-secondary/20 via-secondary/30 to-secondary/20">
          <div className="centered-content">
            <CharacterCarousel 
              characters={otherCharacters} 
              title="Other Featured Characters"
            />
          </div>
        </section>
      )}
    </>
  );
}
