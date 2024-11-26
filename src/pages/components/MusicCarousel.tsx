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
  url: string;
  embedUrl: string;
}

const tracks: Record<string, Track[]> = {
  EDM: [
    {
      url: "https://soundcloud.com/dermart/take-it-easy-man",
      embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1953703903&color=%23ff0000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    },
    {
      url: "https://soundcloud.com/dermart/eetswa",
      embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1876708866&color=%23ff0000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    },
    {
      url: "https://soundcloud.com/dermart/track-2",
      embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1407833932&color=%23ff0000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    },
    {
      url: "https://soundcloud.com/dermart/track-3",
      embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1925441912&color=%23ff0000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    },
    {
      url: "https://soundcloud.com/dermart/track-4",
      embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1925455823&color=%23ff0000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    },
    {
      url: "https://soundcloud.com/dermart/track-5",
      embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/586007346&color=%23ff0000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    },
  ],
  Rap: [
    {
      url: "https://soundcloud.com/dermart/sets/rap-beats",
      embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1913529643&color=%23ff0000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    },
  ],
  Remixes: [],
};

export const MusicCarousel = ({ category }: { category: keyof typeof tracks }) => {
  const { setTrack } = useAudio();

  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      className="w-full max-w-2xl mx-auto"
    >
      <CarouselContent>
        {tracks[category].map((track, index) => (
          <CarouselItem key={index} className="basis-full">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="portfolio-card aspect-square p-4"
              onClick={() => setTrack(track.url)}
            >
              <iframe 
                width="100%" 
                height="100%" 
                scrolling="no" 
                frameBorder="no" 
                allow="autoplay" 
                src={track.embedUrl}
                className="rounded-lg"
              />
            </motion.div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex -left-12 bg-dermart-gray/20 hover:bg-dermart-gray/40 border-white/10" />
      <CarouselNext className="hidden md:flex -right-12 bg-dermart-gray/20 hover:bg-dermart-gray/40 border-white/10" />
    </Carousel>
  );
};
