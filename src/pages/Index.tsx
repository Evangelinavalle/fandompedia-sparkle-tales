
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CategorySelection } from '@/components/CategorySelection';
import { CharacterCarousel } from '@/components/CharacterCarousel';

// Sample data - this would typically come from your database
const featuredAnime = [
  {
    id: 'naruto',
    image: 'https://source.unsplash.com/random/300x400/?anime',
    stats: {
      name: 'Naruto Uzumaki',
      age: 17,
      height: '166 cm',
      traits: ['Determined', 'Friendly', 'Reckless', 'Optimistic']
    },
    description: 'Naruto Uzumaki is the titular protagonist of the manga Naruto, created by Masashi Kishimoto. As the series progresses, he is a young ninja from the fictional village of Konohagakure. The villagers ridicule and ostracize Naruto on account of the Nine-Tailed Demon Fox—a malevolent creature that attacked Konohagakure—that was sealed away in his body. Despite this, he aspires to become his village\'s leader, the Hokage, in order to receive their approval.',
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
    description: 'Son Goku is a fictional character and main protagonist of the Dragon Ball manga series created by Akira Toriyama. He is based on Sun Wukong, a main character in the classic Chinese novel Journey to the West. Goku is introduced as a young boy with a monkey tail who practices martial arts and possesses superhuman strength.',
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
    description: 'Mikasa Ackerman is a fictional character in the manga series Attack on Titan, created by Hajime Isayama. Mikasa is one of the last Asians, her mother having been one. After her parents were killed by bandits, Mikasa was rescued by Eren Yeager and lived with him and his parents, Grisha and Carla, before the fall of Wall Maria.',
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
    description: 'Monkey D. Luffy, also known as "Straw Hat Luffy" and commonly as "Straw Hat", is the main protagonist of the manga and anime, One Piece. He is the founder and captain of the increasingly infamous and powerful Straw Hat Pirates, as well as one of its top fighters. His lifelong dream is to become the Pirate King by finding the legendary treasure left behind by the late Pirate King, Gol D. Roger.',
    category: 'anime' as const
  }
];

const featuredDisney = [
  {
    id: 'simba',
    image: 'https://source.unsplash.com/random/300x400/?lion',
    stats: {
      name: 'Simba',
      age: 'Adult',
      traits: ['Courageous', 'Conflicted', 'Loyal', 'Compassionate']
    },
    description: 'Simba is the protagonist of Disney\'s 1994 animated feature film, The Lion King. He is the son of Mufasa and Sarabi, who was destined to rule the Pride Lands, as king. When Mufasa was murdered by his treacherous brother, Scar, Simba was exiled from the Pride Lands after his uncle tricked him into taking the blame for his father\'s death.',
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
    description: 'Elsa is the deuteragonist of Disney\'s 2013 animated feature film Frozen and the protagonist of its 2019 sequel. Born with the power of ice and snow, Elsa is the firstborn daughter of King Agnarr and Queen Iduna, the older sister of Queen Anna, and the former queen of Arendelle.',
    category: 'disney' as const
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Welcome to <span className="text-primary">FandomPedia</span>
            </motion.h1>
            
            <motion.p
              className="text-xl text-muted-foreground mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Your definitive guide to characters from anime, Disney, Ghibli, manhwa, and Asian cartoons.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a 
                href="#categories" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium transition-colors"
              >
                Explore Characters
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Categories Introduction Section */}
      <section className="py-8 bg-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-3">Explore Categories</h2>
            <p className="text-muted-foreground mb-6">Find characters from different styles of animation.</p>
          </motion.div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section id="categories" className="py-12">
        <CategorySelection />
      </section>
      
      {/* Featured Characters Section */}
      <section className="py-12 bg-secondary/30">
        <CharacterCarousel 
          characters={featuredAnime} 
          title="Featured Anime Characters"
        />
      </section>
      
      <section className="py-12">
        <CharacterCarousel 
          characters={featuredDisney} 
          title="Featured Disney Characters"
        />
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-background to-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
            <p className="text-muted-foreground mb-8">
              Connect with fellow fans, discuss your favorite characters, and contribute to our growing database.
            </p>
            <a 
              href="/forum" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium transition-colors"
            >
              Visit the Forum
            </a>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
