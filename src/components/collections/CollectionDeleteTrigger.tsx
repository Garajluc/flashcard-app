import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '../utils/IconButton';
import { useCollectionDeleteTrigger } from './useCollectionDeleteTrigger';
import { CollectionDeleteModal } from './CollectionDeleteModal';
import type { CollectionWithId } from '@/data/types';

interface CollectionDeleteTriggerProps {
  collection: CollectionWithId;
}

export const CollectionDeleteTrigger = ({
  collection,
}: CollectionDeleteTriggerProps) => {
  const {
    openModal,
    handleDeleteCollection,
    confirmDeleteCollection,
    cancelDeleteCollection,
  } = useCollectionDeleteTrigger({ id: collection.id });

  return (
    <>
      <IconButton
        onClick={handleDeleteCollection}
        title="Delete"
        icon={<DeleteIcon />}
        size="small"
        variant="text"
        sx={{
          opacity: 0.5,
        }}
      />
      {openModal && (
        <CollectionDeleteModal
          name={collection.category_name}
          isOpen={openModal}
          cancelDeleteCollection={cancelDeleteCollection}
          confirmDeleteCollection={confirmDeleteCollection}
        />
      )}
    </>
  );
};
