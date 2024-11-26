import { ArtworkCategories } from '@/types/artwork';
import { albumCovers } from './artwork/albumCovers';
import { digitalArt } from './artwork/digitalArt';
import { logos } from './artwork/logos';
import { graffiti } from './artwork/graffiti';

export const artworkData: ArtworkCategories = {
  "Album Covers": albumCovers,
  "Digital Art": digitalArt,
  "Logos": logos,
  "Graffiti": graffiti
};