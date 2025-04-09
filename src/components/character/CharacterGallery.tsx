
import { motion } from 'framer-motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface CharacterImage {
  url: string;
  caption?: string;
}

interface CharacterGalleryProps {
  name: string;
  images: CharacterImage[];
}

export function CharacterGallery({ name, images }: CharacterGalleryProps) {
  if (images.length === 0) return null;
  
  return (
    <div className="space-y-3 mt-4">
      <h4 className="font-medium text-sm">Gallery</h4>
      {images.map((img, index) => (
        <motion.div 
          key={index} 
          className="space-y-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 * index }}
        >
          <div className="border rounded-md overflow-hidden shadow-sm">
            <AspectRatio ratio={16/9}>
              <motion.img 
                src={img.url} 
                alt={img.caption || `${name} image ${index + 1}`}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://static.wikia.nocookie.net/boruto/images/6/6c/Naruto_with_coat.png/revision/latest/scale-to-width-down/231?cb=20170917010747";
                }}
              />
            </AspectRatio>
          </div>
          {img.caption && (
            <p className="text-xs text-center text-muted-foreground px-2">{img.caption}</p>
          )}
        </motion.div>
      ))}
    </div>
  );
}
