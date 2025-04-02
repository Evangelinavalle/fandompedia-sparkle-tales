
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CategorySelection } from '@/components/CategorySelection';
import { ArrowLeft } from 'lucide-react';

const Categories = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24">
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <Link 
                to="/" 
                className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-4"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </div>

            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold mb-4">Explore Categories</h1>
              <p className="text-muted-foreground">
                Dive into different worlds and discover fascinating characters from your favorite franchises.
              </p>
            </motion.div>
            
            <CategorySelection />
          </div>
        </section>
        
        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Get the Most from FandomPedia</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="glass-card p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-3">Discover Characters</h3>
                <p className="text-muted-foreground mb-4">
                  Explore detailed profiles of characters from various media franchises.
                </p>
                <Link 
                  to="/" 
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  Browse featured characters
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </motion.div>
              
              <motion.div
                className="glass-card p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-3">Join Discussions</h3>
                <p className="text-muted-foreground mb-4">
                  Connect with fellow fans and discuss your favorite characters and series.
                </p>
                <Link 
                  to="/forum" 
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  Visit the forum
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </motion.div>
              
              <motion.div
                className="glass-card p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-3">Save Favorites</h3>
                <p className="text-muted-foreground mb-4">
                  Bookmark your favorite characters for quick access (coming soon).
                </p>
                <span className="text-muted-foreground inline-flex items-center gap-1">
                  Feature coming soon
                </span>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Categories;
