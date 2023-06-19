import { useCallback, useContext } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';
import type { Collection } from '../../../data/types';
import { CollectionsContext } from '@/context/CollectionsContext';
import { createOrUpdateCollections } from '@/api/collection/CollectionService';

type HookReturn = {
  onSubmit: (formData: Collection) => void;
};

export const useCreateCollectionForm = (): HookReturn => {
  const router = useRouter();
  const { collections, setCollections } = useContext(CollectionsContext);

  const successCallback = useCallback(() => {
    router.push({
      pathname: '/',
    });
  }, [router]);

  const onSubmit: SubmitHandler<Collection> = useCallback(
    (formData) => {
      const updatedCollections = createOrUpdateCollections(
        collections,
        formData
      );
      setCollections?.(updatedCollections);
      successCallback();
    },
    [collections, setCollections, successCallback]
  );

  return { onSubmit };
};
