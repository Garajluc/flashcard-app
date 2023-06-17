import { useCallback, useContext } from 'react';
import type { CollectionRequestBody } from '../../data/types';
import { CollectionsContext } from '@/context/CollectionsContext';
import { updateCollections } from '@/api/collection/CollectionService';
import { SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';

type HookReturn = {
  onSubmit: (formData: CollectionRequestBody) => void;
};

export const useCreateCollections = (): HookReturn => {
  const router = useRouter();
  const { collections, setCollections } = useContext(CollectionsContext);

  const successCallback = useCallback(() => {
    router.push({
      pathname: '/',
    });
  }, []);

  const onSubmit: SubmitHandler<CollectionRequestBody> = useCallback(
    (formData) => {
      const updatedCollections = updateCollections(collections, formData);
      setCollections?.(updatedCollections);
      successCallback();
    },
    []
  );

  return { onSubmit };
};
