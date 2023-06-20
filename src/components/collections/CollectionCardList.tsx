import { Grid } from '@mui/material';
import Link from 'next/link';
import AddIcon from '@mui/icons-material/Add';
import { ActionButton } from '../utils/ActionButton';
import SearchField from '../utils/SearchField';
import { WithActionToolbar } from '../utils/WithActionToolbar';
import { CollectionCard } from './CollectionCard';
import { useCollectionCardList } from './useCollectionCardList';

export const CollectionCardList = () => {
  const { collections, handleSearch } = useCollectionCardList();

  return (
    <WithActionToolbar
      actionComponentLeft={<SearchField onChange={handleSearch} />}
      actionComponentRight={
        <Link passHref href={'/collection/create'} legacyBehavior>
          <ActionButton label="Add Flash Card" startIcon={<AddIcon />} />
        </Link>
      }
    >
      <Grid container spacing={4}>
        {collections?.map((collection) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={collection.category_id}>
              <CollectionCard collection={collection} />
            </Grid>
          );
        })}
      </Grid>
    </WithActionToolbar>
  );
};
