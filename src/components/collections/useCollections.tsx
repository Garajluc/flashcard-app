import useSWR from 'swr';
import type { CollectionsCategory } from '../../data/types';
import { fetcher } from '../services/api/SwrFetchService';

type HookReturn = {
  collections?: CollectionsCategory;
  collectionsError?: Error;
  collectionsLoading: boolean;
  hasData?: boolean;
};

export const useCollections = (): HookReturn => {
  const {
    data: collections,
    error: collectionsError,
    isLoading: collectionsLoading,
  } = useSWR<CollectionsCategory>('api/collections', fetcher);

  const hasData =
    !collectionsLoading &&
    !collectionsError &&
    collections &&
    collections.length > 0;

  return { collections, collectionsError, collectionsLoading, hasData };
};
