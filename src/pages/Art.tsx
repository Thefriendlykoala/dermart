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
  "Graffiti": [
    {
      id: "1",
      title: "DERM Logo - Jurassic Evolution",
      imageUrl: "/lovable-uploads/40d69a61-1069-44f2-8de5-f052c2bd4942.png",
      analysis: {
        composition: "Dynamic composition featuring a cartoon T-Rex character integrated with bold typography, set against an explosive orange splatter background that creates visual energy and movement.",
        technique: "Digital graffiti art combining character illustration with gradient-filled typography. Strong use of complementary colors (green dinosaur against orange background) with cyan accents in the spikes.",
        concept: "Fusion of street art aesthetics with playful character design, creating a brand identity that balances urban edge with accessible humor.",
        interpretation: "The piece represents the evolution of street art into digital spaces, with the dinosaur motif suggesting both primal energy and timeless appeal. The splatter effect frames the composition while adding a sense of spontaneity typical of traditional graffiti."
      }
    },
    {
      id: "2",
      title: "DERM - Urban Wildstyle",
      imageUrl: "/lovable-uploads/c8bccd91-2989-4238-ae23-84d480371ca8.png",
      analysis: {
        composition: "Complex wildstyle graffiti arrangement with interlocking letters, enhanced by bubble effects and a vibrant purple background that creates depth and dimension.",
        technique: "Digital graffiti utilizing classic wildstyle techniques with modern color gradients. Multiple layers of detail including highlights, shadows, and decorative elements like bubbles and drips.",
        concept: "A contemporary interpretation of traditional wildstyle graffiti, pushing the boundaries of letter forms while maintaining readability.",
        interpretation: "The piece demonstrates the evolution of graffiti art from street to digital medium, with the bubble motif suggesting a dreamlike or underwater quality that softens the typically aggressive nature of wildstyle letters."
      }
    },
    {
      id: "3",
      title: "DERM - Tropical Paradise",
      imageUrl: "/lovable-uploads/759f307b-e66a-4c5b-9c80-5a680a77dbff.png",
      analysis: {
        composition: "Harmonious blend of typography and organic elements, with letters flowing into a tropical landscape. The pastel color palette creates a dreamy, ethereal atmosphere.",
        technique: "Digital illustration combining graffiti letterforms with decorative floral and geometric elements. Sophisticated use of gradients and lighting effects to create depth.",
        concept: "Merging urban art with natural elements, creating a peaceful interpretation of graffiti that challenges traditional aggressive styling.",
        interpretation: "This piece represents the versatility of graffiti art, showing how urban style can be adapted to create serene, almost meditative compositions while maintaining its core identity."
      }
    },
    {
      id: "4",
      title: "DERM - City Vibes",
      imageUrl: "/lovable-uploads/3713795b-5078-4b1f-ab3a-7f36390c9ab6.png",
      analysis: {
        composition: "Urban landscape integration with stylized letters, creating a scene that merges architecture with typography. The composition uses depth and perspective to create a cityscape feeling.",
        technique: "Digital graffiti with architectural elements, utilizing a bright color palette with strong contrast. Detailed background work with buildings and vegetation creates context.",
        concept: "A celebration of urban art in its natural habitat, with letters becoming part of the city landscape rather than simply existing within it.",
        interpretation: "The artwork speaks to the relationship between graffiti and urban environments, suggesting harmony rather than conflict. The bright, optimistic color scheme and inclusion of natural elements presents a positive vision of urban art culture."
      }
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