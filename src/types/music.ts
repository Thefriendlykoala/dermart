export interface Track {
  id: string;
  title: string;
  audioUrl: string;
  albumArt: string;
  description: string;
  category: "Rap" | "EDM" | "Remixes";
}