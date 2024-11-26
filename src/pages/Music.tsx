import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAudio } from "@/contexts/AudioContext";
import { MusicCarousel } from "./components/MusicCarousel";

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

          <TabsContent value="EDM">
            <MusicCarousel category="EDM" />
          </TabsContent>

          <TabsContent value="Rap">
            <MusicCarousel category="Rap" />
          </TabsContent>

          <TabsContent value="Remixes">
            <MusicCarousel category="Remixes" />
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default Music;