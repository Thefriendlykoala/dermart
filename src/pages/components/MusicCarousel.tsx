import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useAudio } from "@/contexts/AudioContext";

interface Track {
  id: string;
  title: string;
  audioUrl: string;
}

const tracks: Record<string, Track[]> = {
  EDM: [
    {
      id: "1",
      title: "Take It Easy Man",
      audioUrl: "/audio/take-it-easy-man.mp3" // Add your audio file here
    },
    {
      id: "2",
      title: "Eetswa",
      audioUrl: "/audio/eetswa.mp3" // Add your audio file here
    }
  ],
  Rap: [
    {
      id: "3",
      title: "Lanky LC - Rap Beats",
      audioUrl: "/audio/lanky-lc.mp3" // Add your audio file here
    },
    {
      id: "4",
      title: "FATTYFROMTHE4",
      audioUrl: "/audio/fattyfromthe4.mp3" // Add your audio file here
    }
  ],
  Remixes: []
};

export const MusicCarousel = ({ category }: { category: keyof typeof tracks }) => {
  const { setTrack } = useAudio();

  const handleTrackClick = (track: Track) => {
    setTrack(track.audioUrl);
  };

  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      className="w-full max-w-2xl mx-auto"
    >
      <CarouselContent>
        {tracks[category].map((track) => (
          <CarouselItem key={track.id} className="basis-full">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="portfolio-card aspect-square p-4 cursor-pointer"
              onClick={() => handleTrackClick(track)}
            >
              <div className="w-full h-full flex flex-col items-center justify-center">
                <h3 className="text-xl font-bold mb-4 text-center">{track.title}</h3>
                <p className="text-sm text-gray-400">Click to play</p>
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