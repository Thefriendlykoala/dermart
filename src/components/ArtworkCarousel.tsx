import { motion } from 'framer-motion';
import { Artwork } from '@/types/artwork';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ArtworkCarouselProps {
  artworks: Artwork[];
  onArtworkClick: (artwork: Artwork) => void;
}

const ArtworkCarousel = ({ artworks, onArtworkClick }: ArtworkCarouselProps) => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        skipSnaps: false,
        slidesToScroll: 1,
        dragFree: false,
        containScroll: "trimSnaps",
        duration: 50, // Slower animation duration
        dragThreshold: 20, // Higher threshold for touch drag
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-4">
        {artworks.map((artwork, index) => (
          <CarouselItem key={artwork.id} className="pl-4 basis-full md:basis-1/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="cursor-pointer"
              onClick={() => onArtworkClick(artwork)}
            >
              <div className="portfolio-card group relative overflow-hidden aspect-square">
                <img
                  src={artwork.imageUrl}
                  alt={artwork.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{artwork.title}</h3>
                    <p className="text-white/80 text-sm">Click to view details →</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex -left-12 bg-dermart-gray/20 hover:bg-dermart-gray/40 border-white/10" />
      <CarouselNext className="hidden md:flex -right-12 bg-dermart-gray/20 hover:bg-dermart-gray/40 border-white/10" />
    </Carousel>
  );
};

export default ArtworkCarousel;