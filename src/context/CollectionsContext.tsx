import { createContext } from 'react';
import type { Collections } from '@/data/types';

export interface CollectionsContext {
  collections: Collections;
  setCollections: ((collections: Collections) => void) | null;
}

export const CollectionsContext = createContext<CollectionsContext>({
  collections: [],
  setCollections: null,
});
