import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { useAudio } from "@/contexts/AudioContext";
import { tracks } from "@/data/musicData";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const MusicCarousel = ({ category }: { category: string }) => {
  const { setTrack, currentTrack, isPlaying, togglePlay } = useAudio();

  const categoryTracks = tracks.filter(track => track.category === category);

  const handleTrackClick = (audioUrl: string) => {
    setTrack(audioUrl);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
      {categoryTracks.map((track) => (
        <motion.div
          key={track.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="group relative"
        >
          <Card className="bg-dermart-gray/20 border-white/5 hover:bg-dermart-gray/30 transition-all duration-300 h-full flex flex-col">
            <CardHeader className="p-4">
              <div className="relative aspect-square overflow-hidden rounded-md mb-3 group-hover:shadow-lg transition-shadow duration-300">
                <img
                  src={track.albumArt}
                  alt={track.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                />
                <button
                  onClick={() => {
                    if (currentTrack === track.audioUrl) {
                      togglePlay();
                    } else {
                      handleTrackClick(track.audioUrl);
                    }
                  }}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                    {currentTrack === track.audioUrl && isPlaying ? (
                      <Pause className="w-6 h-6 text-white" />
                    ) : (
                      <Play className="w-6 h-6 text-white" />
                    )}
                  </div>
                </button>
              </div>
              <CardTitle className="text-lg font-bold text-white truncate">
                {track.title}
              </CardTitle>
              <CardDescription className="text-white/60 text-sm line-clamp-2">
                {track.description}
              </CardDescription>
            </CardHeader>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};