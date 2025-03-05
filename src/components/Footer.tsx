
import { Book, Github, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t bg-secondary/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Book className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">FandomPedia</span>
            </Link>
            <p className="text-muted-foreground">
              Your definitive guide to characters from anime, Disney, Ghibli, manhwa, and Asian cartoons.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/categories/anime" className="text-muted-foreground hover:text-primary transition-colors">
                  Anime
                </Link>
              </li>
              <li>
                <Link to="/categories/disney" className="text-muted-foreground hover:text-primary transition-colors">
                  Disney
                </Link>
              </li>
              <li>
                <Link to="/categories/ghibli" className="text-muted-foreground hover:text-primary transition-colors">
                  Ghibli
                </Link>
              </li>
              <li>
                <Link to="/categories/manhwa" className="text-muted-foreground hover:text-primary transition-colors">
                  Manhwa
                </Link>
              </li>
              <li>
                <Link to="/categories/asian" className="text-muted-foreground hover:text-primary transition-colors">
                  Asian Cartoons
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/forum" className="text-muted-foreground hover:text-primary transition-colors">
                  Forum
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <div className="flex items-center gap-4 mt-4">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} FandomPedia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
