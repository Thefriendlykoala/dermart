import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Music = () => {
  const renderTitle = (text: string) => {
    return text.split('').map((char, index) => (
      <span key={index} className={char === char.toUpperCase() ? 'text-primary' : ''}>
        {char}
      </span>
    ));
  };

  return (
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
          {renderTitle('dermPRODUCER')}
        </h1>
        
        <Tabs defaultValue="EDM" className="w-full">
          <TabsList className="w-full mb-8 bg-dermart-gray/20 border border-white/5 flex justify-center gap-4">
            <TabsTrigger value="EDM" className="px-6 data-[state=active]:bg-primary/20">EDM</TabsTrigger>
            <TabsTrigger value="Rap" className="px-6 data-[state=active]:bg-primary/20">Rap</TabsTrigger>
            <TabsTrigger value="Remixes" className="px-6 data-[state=active]:bg-primary/20">Remixes</TabsTrigger>
          </TabsList>

          <TabsContent value="EDM" className="space-y-6">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full max-w-2xl mx-auto"
            >
              <CarouselContent>
                {/* Take It Easy Man Track */}
                <CarouselItem className="basis-full">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="portfolio-card aspect-square p-4"
                  >
                    <iframe 
                      width="100%" 
                      height="100%" 
                      scrolling="no" 
                      frameBorder="no" 
                      allow="autoplay" 
                      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1953703903&color=%23ff0000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                      className="rounded-lg"
                    />
                  </motion.div>
                </CarouselItem>

                {/* EETSWA Track */}
                <CarouselItem className="basis-full">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="portfolio-card aspect-square p-4"
                  >
                    <iframe 
                      width="100%" 
                      height="100%" 
                      scrolling="no" 
                      frameBorder="no" 
                      allow="autoplay" 
                      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1876708866&color=%23ff0000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                      className="rounded-lg"
                    />
                  </motion.div>
                </CarouselItem>

                {/* Track 2 */}
                <CarouselItem className="basis-full">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="portfolio-card aspect-square p-4"
                  >
                    <iframe 
                      width="100%" 
                      height="100%" 
                      scrolling="no" 
                      frameBorder="no" 
                      allow="autoplay" 
                      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1407833932&color=%23ff0000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                      className="rounded-lg"
                    />
                  </motion.div>
                </CarouselItem>

                {/* Track 3 */}
                <CarouselItem className="basis-full">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="portfolio-card aspect-square p-4"
                  >
                    <iframe 
                      width="100%" 
                      height="100%" 
                      scrolling="no" 
                      frameBorder="no" 
                      allow="autoplay" 
                      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1925441912&color=%23ff0000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                      className="rounded-lg"
                    />
                  </motion.div>
                </CarouselItem>

                {/* Track 4 */}
                <CarouselItem className="basis-full">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="portfolio-card aspect-square p-4"
                  >
                    <iframe 
                      width="100%" 
                      height="100%" 
                      scrolling="no" 
                      frameBorder="no" 
                      allow="autoplay" 
                      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1925455823&color=%23ff0000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                      className="rounded-lg"
                    />
                  </motion.div>
                </CarouselItem>

                {/* Track 5 */}
                <CarouselItem className="basis-full">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="portfolio-card aspect-square p-4"
                  >
                    <iframe 
                      width="100%" 
                      height="100%" 
                      scrolling="no" 
                      frameBorder="no" 
                      allow="autoplay" 
                      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/586007346&color=%23ff0000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                      className="rounded-lg"
                    />
                  </motion.div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12 bg-dermart-gray/20 hover:bg-dermart-gray/40 border-white/10" />
              <CarouselNext className="hidden md:flex -right-12 bg-dermart-gray/20 hover:bg-dermart-gray/40 border-white/10" />
            </Carousel>
          </TabsContent>

          <TabsContent value="Rap" className="space-y-6">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full max-w-2xl mx-auto"
            >
              <CarouselContent>
                <CarouselItem className="basis-full">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="portfolio-card aspect-square p-4"
                  >
                    <iframe 
                      width="100%" 
                      height="100%" 
                      scrolling="no" 
                      frameBorder="no" 
                      allow="autoplay" 
                      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1913529643&color=%23ff0000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                      className="rounded-lg"
                    />
                  </motion.div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12 bg-dermart-gray/20 hover:bg-dermart-gray/40 border-white/10" />
              <CarouselNext className="hidden md:flex -right-12 bg-dermart-gray/20 hover:bg-dermart-gray/40 border-white/10" />
            </Carousel>
          </TabsContent>

          <TabsContent value="Remixes" className="space-y-6">
            {/* Empty Remixes section */}
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default Music;