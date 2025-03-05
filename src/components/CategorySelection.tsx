
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Film, Tv, BookText, Palette, Image } from 'lucide-react';

const categories = [
  { 
    id: 'anime', 
    name: 'Anime',
    icon: Tv,
    color: 'bg-anime/10 text-anime border-anime/20',
    hoverColor: 'hover:bg-anime/20',
    path: '/categories/anime'
  },
  { 
    id: 'disney', 
    name: 'Disney',
    icon: Film,
    color: 'bg-disney/10 text-disney border-disney/20',
    hoverColor: 'hover:bg-disney/20',
    path: '/categories/disney'
  },
  { 
    id: 'ghibli', 
    name: 'Ghibli',
    icon: Palette,
    color: 'bg-ghibli/10 text-ghibli border-ghibli/20',
    hoverColor: 'hover:bg-ghibli/20',
    path: '/categories/ghibli'
  },
  { 
    id: 'manhwa', 
    name: 'Manhwa',
    icon: BookText,
    color: 'bg-manhwa/10 text-manhwa border-manhwa/20',
    hoverColor: 'hover:bg-manhwa/20',
    path: '/categories/manhwa'
  },
  { 
    id: 'asian', 
    name: 'Asian Cartoons',
    icon: Image,
    color: 'bg-asian/10 text-asian border-asian/20',
    hoverColor: 'hover:bg-asian/20',
    path: '/categories/asian'
  }
];

export function CategorySelection() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h2 
        className="text-3xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Explore Categories
      </motion.h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link to={category.path}>
              <motion.div 
                className={`flex flex-col items-center justify-center p-6 rounded-xl border ${category.color} ${category.hoverColor} transition-all duration-300 h-full`}
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                whileTap={{ scale: 0.98 }}
              >
                <category.icon className="h-12 w-12 mb-4" />
                <h3 className="font-medium text-lg">{category.name}</h3>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
