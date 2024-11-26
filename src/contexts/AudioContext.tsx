import React, { createContext, useContext, useState, useRef } from 'react';

interface AudioContextType {
  isPlaying: boolean;
  currentTrack: string;
  volume: number;
  togglePlay: () => void;
  setVolume: (volume: number) => void;
  setTrack: (track: string) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState('');
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef<HTMLAudioElement | null>(null);

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
    audioRef.current.src = track;
    setCurrentTrack(track);
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  return (
    <AudioContext.Provider 
      value={{
        isPlaying,
        currentTrack,
        volume,
        togglePlay,
        setVolume: handleVolumeChange,
        setTrack: handleTrackChange,
      }}
    >
      <audio ref={audioRef} />
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