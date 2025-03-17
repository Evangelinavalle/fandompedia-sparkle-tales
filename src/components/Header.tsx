
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Book, MessageCircle, Home, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AuthModal } from '@/components/AuthModal';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300",
        isScrolled 
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Book className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">FandomPedia</span>
        </Link>
        
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-1">
            <Link 
              to="/" 
              className={cn("navbar-link", location.pathname === "/" && "active-link")}
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link 
              to="/categories" 
              className={cn("navbar-link", location.pathname.includes("/categories") && "active-link")}
            >
              <Book className="h-4 w-4" />
              <span>Categories</span>
            </Link>
            <Link 
              to="/forum" 
              className={cn("navbar-link", location.pathname.includes("/forum") && "active-link")}
            >
              <MessageCircle className="h-4 w-4" />
              <span>Forum</span>
            </Link>
          </nav>
          
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full hover:bg-secondary transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <AuthModal />
          </div>
        </div>
      </div>
    </header>
  );
}
