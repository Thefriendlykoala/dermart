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
    <Dialog open={!!artwork} onOpenChange={onClose} modal={false}>
      <DialogContent 
        className="bg-dermart-gray/95 border-white/10 text-white w-[95%] max-w-4xl mx-auto p-4 sm:p-6"
        onPointerDownOutside={onClose}
        onEscapeKeyDown={onClose}
      >
        <DialogClose className="absolute right-3 top-3 sm:right-4 sm:top-4 text-white/70 hover:text-white">
          <X className="h-5 w-5 sm:h-6 sm:w-6" />
        </DialogClose>
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          <div className="relative aspect-square">
            <img
              src={artwork.imageUrl}
              alt={artwork.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold">{artwork.title}</h2>
            <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
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