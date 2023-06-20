import { useCallback, useState } from 'react';
import type { KeyOption } from 'match-sorter';
import { matchSorter } from 'match-sorter';

interface HookParams<ItemType> {
  listData?: ItemType[] | null;
  searchKeys: KeyOption<ItemType>[];
}

interface HookResult<ItemType> {
  handleSearch: (value: string) => void;
  filteredData?: ItemType[] | null;
  searchText: string;
  setSearchText: (text: string) => void;
}

export const useOmniListSearch = <ItemType,>({
  listData,
  searchKeys,
}: HookParams<ItemType>): HookResult<ItemType> => {
  const [searchText, setSearchText] = useState('');

  const filteredData =
    listData &&
    matchSorter(listData, searchText, {
      keys: searchKeys,
    });

  const handleSearch = useCallback((value: string) => {
    setSearchText(value);
  }, []);

  return {
    handleSearch,
    searchText,
    setSearchText,
    filteredData,
  };
};
