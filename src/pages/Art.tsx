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
    title: "Digital Circuits",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    category: "2DArt",
    description: "Abstract digital circuit visualization"
  },
  {
    id: "2",
    title: "Code Canvas",
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    category: "2DArt",
    description: "Colorful code patterns"
  },
  {
    id: "3",
    title: "Digital Creation",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    category: "2DArt",
    description: "Digital art creation process"
  },
  {
    id: "4",
    title: "Abstract Waves",
    imageUrl: "https://images.unsplash.com/photo-1486718448742-163732cd1544",
    category: "2DArt",
    description: "Minimalist wave structures"
  }
];

const categories = ["2DArt", "3DArt", "Traditional"];

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
        
        <Tabs defaultValue="2DArt" className="w-full">
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