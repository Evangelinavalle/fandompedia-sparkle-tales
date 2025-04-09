
import { motion } from 'framer-motion';
import { Heart, Sparkles, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HeroSection() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-secondary/50 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-20 right-[10%] text-pink-300 opacity-40"
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <Heart size={48} />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-10 left-[15%] text-yellow-300 opacity-40"
        animate={{ 
          y: [0, 10, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 3.5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <Star size={36} />
      </motion.div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Welcome to <span className="text-primary relative inline-block">
                FandomPedia
                <motion.span 
                  className="absolute -top-6 -right-8 text-2xl"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <Sparkles className="h-5 w-5 text-yellow-400" />
                </motion.span>
              </span>
            </h1>
          </motion.div>
          
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
            className="flex gap-4"
          >
            <Link 
              to="/categories" 
              className="cute-button"
            >
              Explore Categories
            </Link>
            <Link 
              to="/forum" 
              className="cute-button bg-secondary/70 hover:bg-secondary/80"
            >
              Join Forum
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
