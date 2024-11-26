import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

interface AudioContextType {
  isPlaying: boolean;
  currentTrack: string;
  volume: number;
  progress: number;
  duration: number;
  trackTitle: string;
  togglePlay: () => void;
  setVolume: (volume: number) => void;
  setTrack: (track: string) => void;
  skipNext: () => void;
  skipPrevious: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState('');
  const [volume, setVolume] = useState(0.5);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [trackTitle, setTrackTitle] = useState('');
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.volume = volume;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current;

      const updateProgress = () => {
        setProgress(audio.currentTime * 1000);
      };

      const handleEnded = () => {
        setIsPlaying(false);
        setProgress(0);
      };

      const handleLoadedMetadata = () => {
        setDuration(audio.duration * 1000);
      };

      audio.addEventListener('timeupdate', updateProgress);
      audio.addEventListener('ended', handleEnded);
      audio.addEventListener('loadedmetadata', handleLoadedMetadata);

      return () => {
        audio.removeEventListener('timeupdate', updateProgress);
        audio.removeEventListener('ended', handleEnded);
        audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
    }
  }, [currentTrack]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (newVolume: number) => {
    if (!audioRef.current) return;
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  const handleTrackChange = (track: string) => {
    if (!audioRef.current) return;
    
    const wasPlaying = isPlaying;
    audioRef.current.pause();
    audioRef.current.src = track;
    setCurrentTrack(track);
    setTrackTitle(track.split('/').pop()?.replace('.mp3', '') || '');
    
    if (wasPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const skipNext = () => {
    // Implement skip logic based on your tracks array
  };

  const skipPrevious = () => {
    // Implement previous logic based on your tracks array
  };

  return (
    <AudioContext.Provider
      value={{
        isPlaying,
        currentTrack,
        volume,
        progress,
        duration,
        trackTitle,
        togglePlay,
        setVolume: handleVolumeChange,
        setTrack: handleTrackChange,
        skipNext,
        skipPrevious,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};