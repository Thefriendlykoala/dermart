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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {categoryTracks.map((track) => (
        <motion.div
          key={track.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-dermart-gray/20 border-white/5 hover:bg-dermart-gray/30 transition-colors">
            <CardHeader>
              <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
                <img
                  src={track.albumArt}
                  alt={track.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardTitle className="text-xl font-bold text-white">{track.title}</CardTitle>
              <CardDescription className="text-white/60">
                {track.description}
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <button
                onClick={() => {
                  if (currentTrack === track.audioUrl) {
                    togglePlay();
                  } else {
                    handleTrackClick(track.audioUrl);
                  }
                }}
                className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white py-2 px-4 rounded-md transition-colors"
              >
                {currentTrack === track.audioUrl && isPlaying ? (
                  <>
                    <Pause className="w-4 h-4" />
                    Pause
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    Play Track
                  </>
                )}
              </button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};