import { useCallback, useContext } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import type { Collection } from '../../../data/types';
import { useCollectionForm } from '../useCollectionForm';
import { CollectionsContext } from '@/context/CollectionsContext';
import { createOrUpdateCollection } from '@/api/collection/CollectionService';

type HookReturn = {
  onSubmit: (formData: Collection) => void;
};

export const useCreateCollection = (): HookReturn => {
  const { collections, onSetCollections } = useContext(CollectionsContext);
  const { successCallback } = useCollectionForm();

  const onSubmit: SubmitHandler<Collection> = useCallback(
    (formData) => {
      const updatedCollections = createOrUpdateCollection(
        collections,
        formData
      );
      onSetCollections?.(updatedCollections);
      successCallback();
    },
    [collections, onSetCollections, successCallback]
  );

  return { onSubmit };
};
