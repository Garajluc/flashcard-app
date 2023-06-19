import { useCallback, useContext, useState } from 'react';
import type { Collections } from '../../data/types';
import { CollectionsContext } from '@/context/CollectionsContext';
import { useOmniListSearch } from '@/utils/useOmniListSearch';

type HookReturn = {
  hasData?: boolean;
  collections?: Collections | null;
  collectionIdToDelete: string | null;
  handleSearch: (value: string) => void;
  handleDeleteCollection: (id: string) => void;
  confirmDeleteCollection: () => void;
  cancelDeleteCollection: () => void;
};

export const useCollections = (): HookReturn => {
  const [collectionIdToDelete, setCollectionIdToDelete] = useState<
    string | null
  >(null);
  const { collections, setCollections } = useContext(CollectionsContext);
  const hasData = collections && collections.length > 0;

  const { filteredData, handleSearch } = useOmniListSearch({
    listData: collections,
    searchKeys: ['category_name'],
  });

  const handleDeleteCollection = useCallback(
    (id: string) => {
      setCollectionIdToDelete(id);
    },
    [setCollectionIdToDelete]
  );

  const confirmDeleteCollection = useCallback(() => {
    const updatedCollections = collections?.filter(
      (collection) => collection.id !== collectionIdToDelete
    );
    setCollections?.(updatedCollections);
    setCollectionIdToDelete(null);
  }, [collectionIdToDelete, collections, setCollections]);

  const cancelDeleteCollection = useCallback(() => {
    setCollectionIdToDelete(null);
  }, []);

  return {
    hasData,
    collectionIdToDelete,
    collections: filteredData,
    handleSearch,
    handleDeleteCollection,
    confirmDeleteCollection,
    cancelDeleteCollection,
  };
};
