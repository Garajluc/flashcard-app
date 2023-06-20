import { createContext } from 'react';
import type { CollectionsWithId } from '@/data/types';

export interface CollectionsContext {
  collections: CollectionsWithId;
  onSetCollections: ((newCollections: CollectionsWithId) => void) | null;
}

export const CollectionsContext = createContext<CollectionsContext>({
  collections: [],
  onSetCollections: null,
});
