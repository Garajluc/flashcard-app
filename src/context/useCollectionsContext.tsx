import { useState } from 'react';
import type { CollectionsContext } from './CollectionsContext';
import type { CollectionsWithId } from '@/data/types';
import { collections as collectionsMockData } from '@/data/collections';

export const useCollectionsContext = (): CollectionsContext => {
  const [collections, setCollections] =
    useState<CollectionsWithId>(collectionsMockData);

  return { collections, setCollections };
};
