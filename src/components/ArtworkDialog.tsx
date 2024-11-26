import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { X } from 'lucide-react';
import { Artwork } from '@/types/artwork';

interface ArtworkDialogProps {
  artwork: Artwork | null;
  onClose: () => void;
}

const ArtworkDialog = ({ artwork, onClose }: ArtworkDialogProps) => {
  if (!artwork) return null;

  return (
    <Dialog open={!!artwork} onOpenChange={onClose}>
      <DialogContent className="bg-dermart-gray/95 border-white/10 text-white max-w-4xl">
        <DialogClose className="absolute right-4 top-4 text-white/70 hover:text-white">
          <X className="h-6 w-6" />
        </DialogClose>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative aspect-square">
            <img
              src={artwork.imageUrl}
              alt={artwork.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">{artwork.title}</h2>
            <div className="space-y-3">
              <p><span className="text-primary font-semibold">Composition:</span> {artwork.analysis.composition}</p>
              <p><span className="text-primary font-semibold">Technique:</span> {artwork.analysis.technique}</p>
              <p><span className="text-primary font-semibold">Concept:</span> {artwork.analysis.concept}</p>
              <p><span className="text-primary font-semibold">Interpretation:</span> {artwork.analysis.interpretation}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ArtworkDialog;