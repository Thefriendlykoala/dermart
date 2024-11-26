export interface ArtworkAnalysis {
  composition: string;
  technique: string;
  concept: string;
  interpretation: string;
}

export interface Artwork {
  id: string;
  title: string;
  imageUrl: string;
  analysis: ArtworkAnalysis;
}

export interface ArtworkCategories {
  [key: string]: Artwork[];
}