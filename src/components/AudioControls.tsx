import { Volume2, VolumeX, Play, Pause, SkipBack, SkipForward } from 'lucide-react';
import { useAudio } from '@/contexts/AudioContext';
import { Slider } from '@/components/ui/slider';

const AudioControls = () => {
  const { isPlaying, volume, togglePlay, setVolume, skipNext, skipPrevious } = useAudio();

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-dermart-black/80 backdrop-blur-md border-t border-white/5 py-4">
      <div className="container mx-auto flex items-center justify-center gap-6">
        <div className="flex items-center gap-4">
          <button
            onClick={skipPrevious}
            className="p-2 hover:bg-dermart-gray/20 rounded-full transition-colors"
            aria-label="Previous track"
          >
            <SkipBack className="w-5 h-5 text-primary" />
          </button>

          <button
            onClick={togglePlay}
            className="p-2 hover:bg-dermart-gray/20 rounded-full transition-colors"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 text-primary" />
            ) : (
              <Play className="w-6 h-6 text-primary" />
            )}
          </button>

          <button
            onClick={skipNext}
            className="p-2 hover:bg-dermart-gray/20 rounded-full transition-colors"
            aria-label="Next track"
          >
            <SkipForward className="w-5 h-5 text-primary" />
          </button>
        </div>
        
        <div className="flex items-center gap-4 w-48">
          {volume === 0 ? (
            <VolumeX className="w-5 h-5 text-dermart-white/60" />
          ) : (
            <Volume2 className="w-5 h-5 text-dermart-white/60" />
          )}
          <Slider
            value={[volume * 100]}
            onValueChange={(value) => setVolume(value[0] / 100)}
            max={100}
            step={1}
            className="w-32"
          />
        </div>
      </div>
    </footer>
  );
};

export default AudioControls;