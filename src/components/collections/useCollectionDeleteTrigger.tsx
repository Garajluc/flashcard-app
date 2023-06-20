import { useCallback, useContext, useState } from 'react';
import { CollectionsContext } from '@/context/CollectionsContext';

type HookProps = {
  id: string;
};

type HookReturn = {
  openModal: boolean;
  handleDeleteCollection: () => void;
  confirmDeleteCollection: () => void;
  cancelDeleteCollection: () => void;
};

export const useCollectionDeleteTrigger = ({ id }: HookProps): HookReturn => {
  const [openModal, setOpenModal] = useState(false);
  const { collections, setCollections } = useContext(CollectionsContext);

  const handleDeleteCollection = useCallback(() => setOpenModal(true), []);

  const cancelDeleteCollection = useCallback(() => setOpenModal(false), []);

  const confirmDeleteCollection = useCallback(() => {
    const collectionsWithoutDeleted = collections.filter(
      (collection) => collection.id !== id
    );
    setCollections?.(collectionsWithoutDeleted);
    setOpenModal(false);
  }, [collections, id, setCollections]);

  return {
    openModal,
    handleDeleteCollection,
    confirmDeleteCollection,
    cancelDeleteCollection,
  };
};
