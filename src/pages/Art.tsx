import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ArtworkItem {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  description: string;
}

const artworks: ArtworkItem[] = [
  {
    id: "1",
    title: "Urban Spray Art",
    imageUrl: "https://images.unsplash.com/photo-1569355738086-cc1e5d9d2296",
    category: "Paint/Spray paint",
    description: "Contemporary urban art expression"
  },
  {
    id: "2",
    title: "Digital Landscape",
    imageUrl: "https://images.unsplash.com/photo-1563089145-599997674d42",
    category: "Digital/Photography",
    description: "Digital art and photo manipulation"
  },
  {
    id: "3",
    title: "Modern Sculpture",
    imageUrl: "https://images.unsplash.com/photo-1544531586-fde5298cdd40",
    category: "Model/Sculpting",
    description: "Contemporary sculptural form"
  },
  {
    id: "4",
    title: "Architectural Blueprint",
    imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    category: "Technical Drawing",
    description: "Precision technical illustration"
  }
];

const categories = ["Paint/Spray paint", "Digital/Photography", "Model/Sculpting", "Technical Drawing"];

const Art = () => {
  return (
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Art & Discovery</h1>
        
        <Tabs defaultValue="Paint/Spray paint" className="w-full">
          <TabsList className="w-full mb-8 bg-dermart-gray/20 border border-white/5">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="flex-1 data-[state=active]:bg-primary/20"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {artworks
                  .filter(artwork => artwork.category === category)
                  .map((artwork, index) => (
                    <motion.div
                      key={artwork.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="portfolio-card group relative overflow-hidden aspect-square"
                    >
                      <img
                        src={artwork.imageUrl}
                        alt={artwork.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-xl font-bold text-white mb-2">{artwork.title}</h3>
                          <p className="text-white/80 text-sm">{artwork.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>
    </div>
  );
};

export default Art;