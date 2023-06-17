import { useContext } from 'react';
import type { CollectionsCategory } from '../../data/types';
import { CollectionsContext } from '@/context/CollectionsContext';

type HookReturn = {
  collections?: CollectionsCategory;
  hasData?: boolean;
};

export const useCollections = (): HookReturn => {
  const { collections } = useContext(CollectionsContext);
  const hasData = collections && collections.length > 0;

  return {
    collections,
    hasData,
  };
};
