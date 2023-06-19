import { useCallback, useContext } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';
import { CollectionsContext } from '@/context/CollectionsContext';
import {
  getCollectionById,
  updateCollections,
} from '@/api/collection/CollectionService';
import { useQueryValueFromRouter } from '@/utils/useQueryValueFromRouter';
import type { Collection } from '@/data/types';

type HookReturn = {
  collection: Collection;
  onSubmit: (formData: Collection) => void;
};

export const useEditCollectionForm = (): HookReturn => {
  const router = useRouter();
  const id = useQueryValueFromRouter('id');
  const { collections, setCollections } = useContext(CollectionsContext);
  const collection = getCollectionById(id, collections);

  const successCallback = useCallback(() => {
    router.push({
      pathname: '/',
    });
  }, [router]);

  const onSubmit: SubmitHandler<Collection> = useCallback(
    (formData) => {
      const updatedCollections = updateCollections(
        collections,
        collection.id,
        formData
      );
      setCollections?.(updatedCollections);
      successCallback();
    },
    [collection.id, collections, setCollections, successCallback]
  );

  return { collection, onSubmit };
};
