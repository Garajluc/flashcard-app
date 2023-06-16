import { Grid } from '@mui/material';
import { CollectionCard } from './CollectionCard';
import type { CollectionsCategory } from '@/data/types';

type CollectionCardListProps = {
  collections: CollectionsCategory;
};

export const CollectionCardList = ({
  collections,
}: CollectionCardListProps) => {
  return (
    <Grid container spacing={4}>
      {collections.map((collection) => {
        return (
          <Grid item xs={12} sm={6} md={4} lg={3} key={collection.category_id}>
            <CollectionCard title={collection.category_name} />
          </Grid>
        );
      })}
    </Grid>
  );
};
