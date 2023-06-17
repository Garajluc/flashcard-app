import { useState } from 'react';
import type { CollectionsContext } from './CollectionsContext';
import type { Collections } from '@/data/types';
import { collections as collectionsMockData } from '@/data/collections';

export const useCollectionsContext = (): CollectionsContext => {
  const [collections, setCollections] =
    useState<Collections>(collectionsMockData);

  return { collections, setCollections };
};
