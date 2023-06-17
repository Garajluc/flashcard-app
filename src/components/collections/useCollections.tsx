import { useContext } from 'react';
import type { CollectionsCategory } from '../../data/types';
import { CollectionsContext } from '@/context/CollectionsContext';
import { collections as collectionsMockData } from '@/data/collections';

type HookReturn = {
  collections?: CollectionsCategory;
  hasData?: boolean;
};

export const useCollections = (): HookReturn => {
  const { collections, setCollections } = useContext(CollectionsContext);
  setCollections?.(collectionsMockData);

  const hasData = collections && collections.length > 0;

  return {
    collections,
    hasData,
  };
};
