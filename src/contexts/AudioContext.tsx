import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import type { SoundCloudWidget } from '../types/soundcloud';

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
  const widgetRef = useRef<SoundCloudWidget | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://w.soundcloud.com/player/api.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (iframeRef.current) {
        widgetRef.current = window.SC.Widget(iframeRef.current);
        widgetRef.current.bind('play', () => setIsPlaying(true));
        widgetRef.current.bind('pause', () => setIsPlaying(false));
        widgetRef.current.bind('finish', () => setIsPlaying(false));
        
        // Add new event bindings for track info
        widgetRef.current.bind('playProgress', (data: { currentPosition: number }) => {
          setProgress(data.currentPosition);
        });
        
        widgetRef.current.bind('ready', () => {
          if (widgetRef.current) {
            widgetRef.current.getDuration((durationMs: number) => {
              setDuration(durationMs);
            });
            widgetRef.current.getCurrentSound((sound: any) => {
              setTrackTitle(sound.title);
            });
          }
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const togglePlay = () => {
    if (!widgetRef.current) return;
    if (isPlaying) {
      widgetRef.current.pause();
    } else {
      widgetRef.current.play();
    }
  };

  const handleVolumeChange = (newVolume: number) => {
    if (!widgetRef.current) return;
    widgetRef.current.setVolume(newVolume * 100);
    setVolume(newVolume);
  };

  const handleTrackChange = (track: string) => {
    if (!widgetRef.current) return;
    widgetRef.current.load(track, {
      auto_play: isPlaying,
      show_artwork: true,
      show_user: false,
      show_playcount: false,
      show_comments: false,
      buying: false,
      sharing: false,
      download: false,
    });
    setCurrentTrack(track);
  };

  const skipNext = () => {
    if (!widgetRef.current) return;
    widgetRef.current.next();
  };

  const skipPrevious = () => {
    if (!widgetRef.current) return;
    widgetRef.current.prev();
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
      <iframe
        ref={iframeRef}
        width="0"
        height="0"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293"
        style={{ display: 'none' }}
      />
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