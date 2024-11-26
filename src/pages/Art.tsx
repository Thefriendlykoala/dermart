import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ArtworkAnalysis from "@/components/ArtworkAnalysis";

const artworks = {
  "Digital/Photography": [
    {
      id: "1",
      title: "Typography Study: Urban Brand",
      imageUrl: "/lovable-uploads/a06681f7-70dd-4336-89e9-6bff759e13e6.png",
      analysis: {
        composition: "Minimalist black typography on white background, utilizing negative space with an oval frame that creates dynamic tension.",
        technique: "Vector-based design with clean lines and purposeful asymmetry in the signature style.",
        concept: "A contemporary take on personal branding, merging street culture aesthetics with refined typography.",
        interpretation: "The piece speaks to the intersection of street credibility and commercial design, with the oval containing the signature suggesting both protection and prominence."
      }
    },
    {
      id: "2",
      title: "VIRUS - Urban Commentary",
      imageUrl: "/lovable-uploads/5ff68faf-c890-493f-9509-3b66f9124a53.png",
      analysis: {
        composition: "High contrast imagery featuring a figure in protective gear against a stark background, text overlay creates hierarchy.",
        technique: "Digital illustration with limited color palette, emphasizing yellow-green hazmat suit against dark backdrop.",
        concept: "Commentary on modern societal fears and health consciousness, merging urban culture with pandemic imagery.",
        interpretation: "The work reflects contemporary anxieties through the lens of street culture, with the parental advisory label adding a layer of social commentary."
      }
    },
    {
      id: "3",
      title: "The XL Files - Paranormal Pop",
      imageUrl: "/lovable-uploads/779a5ef0-d250-4008-8d55-40a269314123.png",
      analysis: {
        composition: "Centered UFO beam creates strong vertical movement, red atmospheric background adds dramatic effect.",
        technique: "Digital painting with atmospheric effects, utilizing light and shadow to create depth and mystery.",
        concept: "Pop culture reference merging sci-fi imagery with contemporary design aesthetics.",
        interpretation: "A playful yet ominous take on conspiracy culture, using familiar UFO imagery with a modern twist."
      }
    },
    {
      id: "4",
      title: "Feel Trust - Digital Portrait",
      imageUrl: "/lovable-uploads/c4007591-62c7-4138-bd29-ef7b10820bae.png",
      analysis: {
        composition: "Split composition with portrait dominating left side, typography aligned vertically on right.",
        technique: "Digital manipulation with duotone effect in blue, heavy texture overlays create depth.",
        concept: "Exploration of trust through portraiture and typography, creating a cohesive visual narrative.",
        interpretation: "The piece examines human connection in the digital age, with the blue palette suggesting technology and coldness."
      }
    },
    {
      id: "5",
      title: "Trap Invaders - Digital Decay",
      imageUrl: "/lovable-uploads/ec947d18-df30-4f7f-99e4-b45a23741e24.png",
      analysis: {
        composition: "Layered typography and geometric shapes create depth, with intentional digital artifacts.",
        technique: "Digital collage with glitch effects, monochromatic green palette with high contrast elements.",
        concept: "Merging of gaming aesthetics with trap music culture, exploring digital degradation.",
        interpretation: "Commentary on the intersection of digital culture and music, with intentional corruption suggesting artistic rebellion."
      }
    }
  ],
  "Paint/Spray paint": [
    {
      id: "1",
      title: "Urban Spray Art",
      imageUrl: "https://images.unsplash.com/photo-1569355738086-cc1e5d9d2296",
      description: "Contemporary urban art expression"
    },
    {
      id: "2",
      title: "Modern Sculpture",
      imageUrl: "https://images.unsplash.com/photo-1544531586-fde5298cdd40",
      description: "Contemporary sculptural form"
    },
    {
      id: "3",
      title: "Architectural Blueprint",
      imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
      description: "Precision technical illustration"
    }
  ]
};

const categories = Object.keys(artworks);

const Art = () => {
  return (
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Art & Discovery</h1>
        
        <Tabs defaultValue="Digital/Photography" className="w-full">
          <TabsList className="w-full mb-8 bg-dermart-gray/20 border border-white/5">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="flex-1 data-[state=active]:bg-primary/20"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {artworks[category]?.map((artwork, index) => (
                  <motion.div
                    key={artwork.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ArtworkAnalysis
                      title={artwork.title}
                      imageUrl={artwork.imageUrl}
                      analysis={artwork.analysis}
                    />
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

export default Art;
