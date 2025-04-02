
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CategoryHeader } from '@/components/CategoryHeader';
import { CharacterGrid } from '@/components/CharacterGrid';
import { CategoryNotFound } from '@/components/CategoryNotFound';
import { categoryData } from '@/data/categoryData';

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = categoryId && categoryData[categoryId];
  
  useEffect(() => {
    // Scroll to top when category changes
    window.scrollTo(0, 0);
  }, [categoryId]);
  
  if (!category) {
    return <CategoryNotFound />;
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24">
        <div className="container mx-auto px-4">
          <CategoryHeader 
            title={category.title} 
            description={category.description} 
          />
          
          <CharacterGrid characters={category.characters} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
