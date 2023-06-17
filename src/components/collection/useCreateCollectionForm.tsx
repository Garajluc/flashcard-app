import { useCallback, useContext } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';
import type { CollectionRequestBody } from '../../data/types';
import { CollectionsContext } from '@/context/CollectionsContext';
import { updateCollections } from '@/api/collection/CollectionService';

type HookReturn = {
  onSubmit: (formData: CollectionRequestBody) => void;
};

export const useCreateCollectionForm = (): HookReturn => {
  const router = useRouter();
  const { collections, setCollections } = useContext(CollectionsContext);

  const successCallback = useCallback(() => {
    router.push({
      pathname: '/',
    });
  }, [router]);

  const onSubmit: SubmitHandler<CollectionRequestBody> = useCallback(
    (formData) => {
      const updatedCollections = updateCollections(collections, formData);
      setCollections?.(updatedCollections);
      successCallback();
    },
    [collections, setCollections, successCallback]
  );

  return { onSubmit };
};
