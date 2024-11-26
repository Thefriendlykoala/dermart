import { motion } from 'framer-motion';
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ArtworkDialog from '@/components/ArtworkDialog';
import ArtworkCarousel from '@/components/ArtworkCarousel';
import { artworkData } from '@/data/artworkData';
import { Artwork } from '@/types/artwork';

const Art = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [currentCategory, setCurrentCategory] = useState("All");

  const getCurrentArtworks = () => {
    if (currentCategory === "All") {
      return Object.values(artworkData).flat();
    }
    return artworkData[currentCategory] || [];
  };

  return (
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-12">Art & Discovery</h1>
        
        <Tabs 
          defaultValue="All" 
          className="w-full"
          onValueChange={(value) => setCurrentCategory(value)}
        >
          <TabsList className="w-full mb-8 bg-dermart-gray/20 border border-white/5 flex justify-center gap-4">
            <TabsTrigger value="All" className="px-6">All Art</TabsTrigger>
            <TabsTrigger value="Album Covers" className="px-6">Album Covers</TabsTrigger>
            <TabsTrigger value="Logos" className="px-6">Logos</TabsTrigger>
            <TabsTrigger value="Graffiti" className="px-6">Graffiti</TabsTrigger>
          </TabsList>

          <TabsContent value={currentCategory}>
            <ArtworkCarousel 
              artworks={getCurrentArtworks()} 
              onArtworkClick={setSelectedArtwork}
            />
          </TabsContent>
        </Tabs>

        <ArtworkDialog 
          artwork={selectedArtwork} 
          onClose={() => setSelectedArtwork(null)} 
        />
      </motion.div>
    </div>
  );
};

export default Art;