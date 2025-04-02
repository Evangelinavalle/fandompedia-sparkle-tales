
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Film, Tv, BookText, Palette, Image, Sparkles } from 'lucide-react';

const categories = [
  { 
    id: 'anime', 
    name: 'Anime',
    icon: Tv,
    color: 'bg-anime/10 text-anime border-anime/20',
    hoverColor: 'hover:bg-anime/20',
    path: '/categories/anime',
    className: 'anime-card'
  },
  { 
    id: 'disney', 
    name: 'Disney',
    icon: Film,
    color: 'bg-disney/10 text-disney border-disney/20',
    hoverColor: 'hover:bg-disney/20',
    path: '/categories/disney',
    className: 'disney-card'
  },
  { 
    id: 'ghibli', 
    name: 'Ghibli',
    icon: Palette,
    color: 'bg-ghibli/10 text-ghibli border-ghibli/20',
    hoverColor: 'hover:bg-ghibli/20',
    path: '/categories/ghibli',
    className: 'ghibli-card'
  },
  { 
    id: 'manhwa', 
    name: 'Manhwa',
    icon: BookText,
    color: 'bg-manhwa/10 text-manhwa border-manhwa/20',
    hoverColor: 'hover:bg-manhwa/20',
    path: '/categories/manhwa',
    className: 'manhwa-card'
  },
  { 
    id: 'asian', 
    name: 'Asian Cartoons',
    icon: Image,
    color: 'bg-asian/10 text-asian border-asian/20',
    hoverColor: 'hover:bg-asian/20',
    path: '/categories/asian',
    className: 'asian-card'
  }
];

export function CategorySelection() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h2 
        className="text-4xl font-bold text-center mb-12 relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="relative inline-block">
          Explore Categories
          <motion.span
            className="absolute -top-6 -right-8 text-2xl"
            initial={{ opacity: 0, rotate: -20 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            ✨
          </motion.span>
        </span>
      </motion.h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link to={category.path}>
              <motion.div 
                className={`category-card ${category.className} flex flex-col items-center justify-center p-6 rounded-xl border ${category.color} ${category.hoverColor} transition-all duration-300 h-full`}
                whileHover={{ y: -8, boxShadow: '0 15px 30px -10px rgba(0, 0, 0, 0.1)' }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="mb-4 relative"
                  whileHover={{ rotate: [0, -5, 5, -5, 0], transition: { duration: 0.5 } }}
                >
                  <category.icon className="h-14 w-14" />
                  <motion.span
                    className="absolute -top-2 -right-2 text-xs"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 2,
                      repeatType: "reverse"
                    }}
                  >
                    <Sparkles className="w-4 h-4 text-yellow-400" />
                  </motion.span>
                </motion.div>
                <h3 className="font-medium text-xl">{category.name}</h3>
                <motion.div
                  className="w-12 h-1 mt-3 bg-gradient-to-r rounded-full opacity-70"
                  style={{
                    backgroundImage: 
                      category.id === 'anime' ? 'linear-gradient(to right, #8B5CF6, #C4B5FD)' :
                      category.id === 'disney' ? 'linear-gradient(to right, #0EA5E9, #BAE6FD)' :
                      category.id === 'ghibli' ? 'linear-gradient(to right, #10B981, #A7F3D0)' :
                      category.id === 'manhwa' ? 'linear-gradient(to right, #F97316, #FDBA74)' :
                      'linear-gradient(to right, #EC4899, #F9A8D4)'
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: '3rem' }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                />
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
