import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

interface ArtworkAnalysisProps {
  title: string;
  imageUrl: string;
  analysis: {
    composition: string;
    technique: string;
    concept: string;
    interpretation: string;
  };
}

const ArtworkAnalysis = ({ title, imageUrl, analysis }: ArtworkAnalysisProps) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="portfolio-card group relative overflow-hidden aspect-square cursor-pointer">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
              <p className="text-white/80 text-sm">Click for detailed analysis →</p>
            </div>
          </div>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-96 bg-dermart-gray/95 border-white/10 text-white">
        <div className="space-y-4">
          <h4 className="font-bold text-lg">{title}</h4>
          <div className="space-y-2 text-sm">
            <p><span className="text-primary">Composition:</span> {analysis.composition}</p>
            <p><span className="text-primary">Technique:</span> {analysis.technique}</p>
            <p><span className="text-primary">Concept:</span> {analysis.concept}</p>
            <p><span className="text-primary">Interpretation:</span> {analysis.interpretation}</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default ArtworkAnalysis;