import { useContext } from 'react';
import type { CollectionsWithId } from '../../data/types';
import { CollectionsContext } from '@/context/CollectionsContext';
import { useOmniListSearch } from '@/components/utils/useOmniListSearch';

type HookReturn = {
  collections?: CollectionsWithId | null;
  handleSearch: (value: string) => void;
};

export const useCollectionCardList = (): HookReturn => {
  const { collections } = useContext(CollectionsContext);

  const { filteredData, handleSearch } = useOmniListSearch({
    listData: collections,
    searchKeys: ['category_name'],
  });

  return {
    collections: filteredData,
    handleSearch,
  };
};
