import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CharacterTablet } from '@/components/CharacterTablet';

// Sample data - would be fetched from backend based on category
const categoryData = {
  anime: {
    title: 'Anime Characters',
    description: 'Explore your favorite anime characters from various series.',
    characters: [
      {
        id: 'naruto',
        image: 'https://source.unsplash.com/random/300x400/?anime',
        stats: {
          name: 'Naruto Uzumaki',
          age: 17,
          height: '166 cm',
          traits: ['Determined', 'Friendly', 'Reckless', 'Optimistic']
        },
        description: 'Naruto Uzumaki is the titular protagonist of the manga Naruto, created by Masashi Kishimoto. As the series progresses, he is a young ninja from the fictional village of Konohagakure.',
        additionalImages: [
          { 
            url: 'https://source.unsplash.com/random/800x450/?ninja', 
            caption: 'Naruto using his signature jutsu'
          },
          { 
            url: 'https://source.unsplash.com/random/800x450/?forest', 
            caption: 'Training in the Hidden Leaf Village'
          }
        ],
        category: 'anime' as const
      },
      {
        id: 'goku',
        image: 'https://source.unsplash.com/random/300x400/?dragon',
        stats: {
          name: 'Goku',
          age: 'Unknown',
          height: '175 cm',
          traits: ['Powerful', 'Kind', 'Naive', 'Competitive']
        },
        description: 'Son Goku is a fictional character and main protagonist of the Dragon Ball manga series created by Akira Toriyama. He is based on Sun Wukong, a main character in the classic Chinese novel Journey to the West.',
        additionalImages: [
          { 
            url: 'https://source.unsplash.com/random/800x450/?energy', 
            caption: 'Goku powering up to Super Saiyan'
          }
        ],
        category: 'anime' as const
      },
      {
        id: 'mikasa',
        image: 'https://source.unsplash.com/random/300x400/?warrior',
        stats: {
          name: 'Mikasa Ackerman',
          age: 19,
          height: '170 cm',
          traits: ['Protective', 'Skilled', 'Loyal', 'Stoic']
        },
        description: 'Mikasa Ackerman is a fictional character in the manga series Attack on Titan, created by Hajime Isayama. Mikasa is one of the last Asians, her mother having been one.',
        category: 'anime' as const
      },
      {
        id: 'luffy',
        image: 'https://source.unsplash.com/random/300x400/?pirate',
        stats: {
          name: 'Monkey D. Luffy',
          age: 19,
          height: '174 cm',
          traits: ['Adventurous', 'Loyal', 'Reckless', 'Determined']
        },
        description: 'Monkey D. Luffy, also known as "Straw Hat Luffy" and commonly as "Straw Hat", is the main protagonist of the manga and anime, One Piece.',
        category: 'anime' as const
      }
    ]
  },
  disney: {
    title: 'Disney Characters',
    description: 'Discover beloved characters from Disney movies and shows.',
    characters: [
      {
        id: 'simba',
        image: 'https://source.unsplash.com/random/300x400/?lion',
        stats: {
          name: 'Simba',
          age: 'Adult',
          traits: ['Courageous', 'Conflicted', 'Loyal', 'Compassionate']
        },
        description: 'Simba is the protagonist of Disney\'s 1994 animated feature film, The Lion King. He is the son of Mufasa and Sarabi, who was destined to rule the Pride Lands, as king.',
        additionalImages: [
          { 
            url: 'https://source.unsplash.com/random/800x450/?savanna', 
            caption: 'The Pride Lands'
          },
          { 
            url: 'https://source.unsplash.com/random/800x450/?lion-cub', 
            caption: 'Young Simba'
          }
        ],
        category: 'disney' as const
      },
      {
        id: 'elsa',
        image: 'https://source.unsplash.com/random/300x400/?snow',
        stats: {
          name: 'Elsa',
          age: 24,
          height: '170 cm',
          traits: ['Magical', 'Introverted', 'Protective', 'Regal']
        },
        description: 'Elsa is the deuteragonist of Disney\'s 2013 animated feature film Frozen and the protagonist of its 2019 sequel. Born with the power of ice and snow, Elsa is the firstborn daughter of King Agnarr and Queen Iduna.',
        category: 'disney' as const
      }
    ]
  },
  ghibli: {
    title: 'Studio Ghibli Characters',
    description: 'Meet enchanting characters from Studio Ghibli films.',
    characters: [
      {
        id: 'totoro',
        image: 'https://source.unsplash.com/random/300x400/?forest',
        stats: {
          name: 'Totoro',
          traits: ['Gentle', 'Mysterious', 'Magical', 'Protective']
        },
        description: 'Totoro is the title character from the Studio Ghibli film My Neighbor Totoro, directed by Hayao Miyazaki. Totoro is a spirit of the forest, and is considered to be one of the most iconic characters from Studio Ghibli.',
        additionalImages: [
          { 
            url: 'https://source.unsplash.com/random/800x450/?nature', 
            caption: 'Totoro\'s forest home'
          },
          { 
            url: 'https://source.unsplash.com/random/800x450/?rain', 
            caption: 'Waiting at the bus stop'
          }
        ],
        category: 'ghibli' as const
      }
    ]
  },
  manhwa: {
    title: 'Manhwa Characters',
    description: 'Explore characters from popular Korean manhwa series.',
    characters: [
      {
        id: 'solo-leveling',
        image: 'https://source.unsplash.com/random/300x400/?warrior',
        stats: {
          name: 'Sung Jin-Woo',
          age: 25,
          traits: ['Determined', 'Powerful', 'Reserved', 'Strategic']
        },
        description: 'Sung Jin-Woo is the main protagonist of Solo Leveling. He started out as the weakest rank of hunter known as the "World\'s Weakest Hunter". After a near-death experience in a double dungeon, he gained the System\'s power.',
        category: 'manhwa' as const
      }
    ]
  },
  asian: {
    title: 'Asian Cartoon Characters',
    description: 'Discover characters from Asian cartoons and animations.',
    characters: [
      {
        id: 'asian-char',
        image: 'https://source.unsplash.com/random/300x400/?cartoon',
        stats: {
          name: 'Sample Character',
          traits: ['Brave', 'Clever', 'Kind']
        },
        description: 'This is a sample character from an Asian cartoon series. More details would be added here about their story, personality, and significance in their show.',
        category: 'asian' as const
      }
    ]
  }
};

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: keyof typeof categoryData }>();
  const category = categoryId && categoryData[categoryId as keyof typeof categoryData];
  
  useEffect(() => {
    // Scroll to top when category changes
    window.scrollTo(0, 0);
  }, [categoryId]);
  
  if (!category) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Category not found</h1>
            <Link to="/categories" className="text-primary hover:underline flex items-center gap-2 justify-center">
              <ArrowLeft className="h-4 w-4" />
              Back to Categories
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link 
              to="/categories" 
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Categories
            </Link>
            
            <motion.h1 
              className="text-3xl font-bold mb-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {category.title}
            </motion.h1>
            
            <motion.p 
              className="text-muted-foreground mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {category.description}
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
            {category.characters.map((character, index) => (
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
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
