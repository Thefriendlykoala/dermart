import { ArtworkCategories } from '@/types/artwork';
import { albumCovers } from './artwork/albumCovers';
import { logos } from './artwork/logos';
import { graffiti } from './artwork/graffiti';

export const artworkData: ArtworkCategories = {
  "Album Covers": albumCovers,
  "Logos": logos,
  "Graffiti": graffiti
};