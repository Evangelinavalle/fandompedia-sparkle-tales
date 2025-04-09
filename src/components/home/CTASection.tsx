
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-background via-secondary/40 to-background">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <motion.div className="mb-2 inline-block">
            <Star className="h-8 w-8 inline-block text-yellow-400 fill-yellow-400" />
          </motion.div>
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-muted-foreground mb-8">
            Connect with fellow fans, discuss your favorite characters, and contribute to our growing database.
          </p>
          <Link 
            to="/forum" 
            className="cute-button"
          >
            Visit the Forum
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
