import { useState } from 'react';
import type { CollectionsContext } from './CollectionsContext';
import type { Collections } from '@/data/types';

export const useCollectionsContext = (): CollectionsContext => {
  const [collections, setCollections] = useState<Collections>([]);

  return { collections, setCollections };
};
