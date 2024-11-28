import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MusicCarousel } from "./components/MusicCarousel";
import { ScrollArea } from "@/components/ui/scroll-area";

const Music = () => {
  const renderTitle = (text: string) => {
    return text.split('').map((char, index) => (
      <span key={index} className={char === char.toUpperCase() ? 'text-primary' : ''}>
        {char}
      </span>
    ));
  };

  return (
    <ScrollArea className="h-[calc(100vh-80px)]">
      <div className="container mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center">
            {renderTitle('dermPRODUCER')}
          </h1>
          
          <Tabs defaultValue="EDM" className="w-full">
            <TabsList className="w-full mb-8 bg-dermart-gray/20 border border-white/5 flex justify-center gap-4 sticky top-0 z-10 backdrop-blur-md">
              <TabsTrigger 
                value="EDM" 
                className="px-6 py-3 data-[state=active]:bg-primary/20 transition-all"
              >
                EDM
              </TabsTrigger>
              <TabsTrigger 
                value="Rap" 
                className="px-6 py-3 data-[state=active]:bg-primary/20 transition-all"
              >
                Rap
              </TabsTrigger>
              <TabsTrigger 
                value="Remixes" 
                className="px-6 py-3 data-[state=active]:bg-primary/20 transition-all"
              >
                Remixes
              </TabsTrigger>
            </TabsList>

            <TabsContent value="EDM" className="focus-visible:outline-none">
              <MusicCarousel category="EDM" />
            </TabsContent>

            <TabsContent value="Rap" className="focus-visible:outline-none">
              <MusicCarousel category="Rap" />
            </TabsContent>

            <TabsContent value="Remixes" className="focus-visible:outline-none">
              <MusicCarousel category="Remixes" />
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </ScrollArea>
  );
};

export default Music;