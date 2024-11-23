import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface Song {
  title: string;
  artist: string;
  duration: string;
  genre: string;
}

const songs: Song[] = [
  { title: "Neon Dreams", artist: "DermArt", duration: "3:45", genre: "Electronic" },
  { title: "Digital Canvas", artist: "DermArt", duration: "4:20", genre: "Electronic" },
  { title: "Ambient Space", artist: "DermArt", duration: "5:15", genre: "Ambient" },
  { title: "Urban Pulse", artist: "DermArt", duration: "3:30", genre: "Electronic" },
  { title: "Nature's Echo", artist: "DermArt", duration: "6:10", genre: "Ambient" },
  { title: "Cyber Symphony", artist: "DermArt", duration: "4:45", genre: "Electronic" },
  { title: "Peaceful Waters", artist: "DermArt", duration: "5:30", genre: "Ambient" },
  { title: "Tech Horizon", artist: "DermArt", duration: "4:15", genre: "Electronic" },
];

const genres = Array.from(new Set(songs.map(song => song.genre)));

const Music = () => {
  return (
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Music Collection</h1>
        
        <Tabs defaultValue={genres[0]} className="w-full">
          <TabsList className="w-full mb-8 bg-dermart-gray/20 border border-white/5">
            {genres.map((genre) => (
              <TabsTrigger
                key={genre}
                value={genre}
                className="flex-1 data-[state=active]:bg-primary/20"
              >
                {genre}
              </TabsTrigger>
            ))}
          </TabsList>

          {genres.map((genre) => (
            <TabsContent key={genre} value={genre}>
              <div className="space-y-2">
                {songs
                  .filter((song) => song.genre === genre)
                  .map((song, index) => (
                    <motion.div
                      key={song.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={cn(
                        "group flex items-center justify-between p-4",
                        "bg-dermart-gray/10 backdrop-blur-sm border border-white/5",
                        "rounded-lg hover:bg-dermart-gray/20 hover:border-primary/20",
                        "transition-all duration-300 cursor-pointer"
                      )}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="w-4 h-4 rounded-full bg-primary"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium group-hover:text-primary transition-colors">
                            {song.title}
                          </h3>
                          <p className="text-sm text-dermart-white/60">{song.artist}</p>
                        </div>
                      </div>
                      <span className="text-sm text-dermart-white/40 group-hover:text-dermart-white/60 transition-colors">
                        {song.duration}
                      </span>
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

export default Music;