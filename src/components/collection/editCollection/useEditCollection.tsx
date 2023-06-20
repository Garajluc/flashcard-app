import { useCallback, useContext } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useCollectionForm } from '../useCollectionForm';
import { CollectionsContext } from '@/context/CollectionsContext';
import {
  getCollectionById,
  updateCollections,
} from '@/api/collection/CollectionService';
import { useQueryValueFromRouter } from '@/utils/useQueryValueFromRouter';
import type { Collection, CollectionWithId } from '@/data/types';

type HookReturn = {
  collection: CollectionWithId;
  onSubmit: (formData: Collection) => void;
};

export const useEditCollection = (): HookReturn => {
  const id = useQueryValueFromRouter('id');
  const { collections, onSetCollections } = useContext(CollectionsContext);
  const collection = getCollectionById(id, collections);
  const { successCallback } = useCollectionForm();

  const onSubmit: SubmitHandler<Collection> = useCallback(
    (formData) => {
      const updatedCollections = updateCollections(
        collections,
        collection.id,
        formData
      );
      onSetCollections?.(updatedCollections);
      successCallback();
    },
    [collection.id, collections, onSetCollections, successCallback]
  );

  return { collection, onSubmit };
};
