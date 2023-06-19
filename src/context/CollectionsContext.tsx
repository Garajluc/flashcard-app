import type { Dispatch, SetStateAction } from 'react';
import { createContext } from 'react';
import type { Collections } from '@/data/types';

export interface CollectionsContext {
  collections: Collections;
  setCollections: Dispatch<SetStateAction<Collections>> | null;
}

export const CollectionsContext = createContext<CollectionsContext>({
  collections: [],
  setCollections: null,
});
