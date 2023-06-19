import { Grid } from '@mui/material';
import { CollectionCard } from './CollectionCard';
import type { CollectionsWithId } from '@/data/types';

type CollectionCardListProps = {
  collections: CollectionsWithId;
  handleDelete: (id: string) => void;
};

export const CollectionCardList = ({
  collections,
  handleDelete,
}: CollectionCardListProps) => {
  return (
    <Grid container spacing={4}>
      {collections.map((collection) => {
        return (
          <Grid item xs={12} sm={6} md={4} lg={3} key={collection.category_id}>
            <CollectionCard
              title={collection.category_name}
              id={collection.id}
              handleDelete={handleDelete}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};
