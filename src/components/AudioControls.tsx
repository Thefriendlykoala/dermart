import { Volume2, VolumeX, Play, Pause, SkipBack, SkipForward } from 'lucide-react';
import { useAudio } from '@/contexts/AudioContext';
import { Slider } from '@/components/ui/slider';
import { Progress } from '@/components/ui/progress';

const AudioControls = () => {
  const { isPlaying, volume, trackTitle, progress, duration, togglePlay, setVolume, skipNext, skipPrevious } = useAudio();

  const formatTime = (ms: number) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const progressPercentage = duration ? (progress / duration) * 100 : 0;

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-dermart-black/80 backdrop-blur-md border-t border-white/5 py-2 sm:py-4">
      <div className="container mx-auto px-3 sm:px-4">
        <Progress value={progressPercentage} className="mb-2" />
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
          <div className="flex-1 min-w-0 text-center sm:text-left">
            <p className="text-sm text-white truncate w-48 sm:w-auto">{trackTitle || 'No track playing'}</p>
            <p className="text-xs text-white/60">{formatTime(progress)} / {formatTime(duration)}</p>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 order-first sm:order-none">
            <button
              onClick={skipPrevious}
              className="p-1.5 sm:p-2 hover:bg-dermart-gray/20 rounded-full transition-colors"
              aria-label="Previous track"
            >
              <SkipBack className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            </button>

            <button
              onClick={togglePlay}
              className="p-1.5 sm:p-2 hover:bg-dermart-gray/20 rounded-full transition-colors"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              ) : (
                <Play className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              )}
            </button>

            <button
              onClick={skipNext}
              className="p-1.5 sm:p-2 hover:bg-dermart-gray/20 rounded-full transition-colors"
              aria-label="Next track"
            >
              <SkipForward className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            </button>
          </div>
          
          <div className="hidden sm:flex items-center gap-4 w-48">
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
      </div>
    </footer>
  );
};

export default AudioControls;