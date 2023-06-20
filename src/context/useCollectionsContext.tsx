import type { CollectionsContext } from './CollectionsContext';
import type { CollectionsWithId } from '@/data/types';
import { collections as collectionsMockData } from '@/data/collections';
import { useLocalStorage } from '@/utils/useLocalStorage';

export const useCollectionsContext = (): CollectionsContext => {
  const [collections, setCollections] = useLocalStorage(
    'collections',
    collectionsMockData
  );

  const onSetCollections = (newCollections: CollectionsWithId) => {
    setCollections(newCollections);
  };

  return { collections, onSetCollections };
};
