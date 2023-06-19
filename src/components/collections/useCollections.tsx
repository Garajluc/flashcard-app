import { useContext } from 'react';
import type { CollectionsCategory } from '../../data/types';
import { CollectionsContext } from '@/context/CollectionsContext';
import { useOmniListSearch } from '@/utils/useOmniListSearch';

type HookReturn = {
  collections?: CollectionsCategory | null;
  hasData?: boolean;
  handleSearch: (value: string) => void;
};

export const useCollections = (): HookReturn => {
  const { collections } = useContext(CollectionsContext);
  const hasData = collections && collections.length > 0;

  const { filteredData, handleSearch } = useOmniListSearch({
    listData: collections,
    searchKeys: ['category_name'],
  });

  return {
    collections: filteredData,
    hasData,
    handleSearch,
  };
};
