import { useContext, useState } from 'react';
import { CollectionsContext } from '@/context/CollectionsContext';
import { getCollectionById } from '@/api/collection/CollectionService';
import { useQueryValueFromRouter } from '@/utils/useQueryValueFromRouter';
import type { Collection } from '@/data/types';

type HookReturn = {
  collection: Collection;
  progress: number;
};

export const useCollectionQuiz = (): HookReturn => {
  const id = useQueryValueFromRouter('id');
  const { collections } = useContext(CollectionsContext);
  const [progress, setProgress] = useState(0); // calculate progress on answering correct or incorrect

  const collection = getCollectionById(id, collections);

  return {
    collection,
    progress,
  };
};
