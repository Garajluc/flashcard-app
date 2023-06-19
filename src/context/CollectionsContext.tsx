import type { Dispatch, SetStateAction } from 'react';
import { createContext } from 'react';
import type { CollectionsWithId } from '@/data/types';

export interface CollectionsContext {
  collections: CollectionsWithId;
  setCollections: Dispatch<SetStateAction<CollectionsWithId>> | null;
}

export const CollectionsContext = createContext<CollectionsContext>({
  collections: [],
  setCollections: null,
});
