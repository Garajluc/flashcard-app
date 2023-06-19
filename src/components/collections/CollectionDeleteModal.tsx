import { useContext } from 'react';
import {
  Button,
  DialogActions,
  DialogContentText,
  DialogTitle,
  Grid,
  Stack,
} from '@mui/material';
import { CollectionsContext } from '@/context/CollectionsContext';

interface Props {
  id: string | null;
  confirmDeleteCollection: () => void;
  cancelDeleteCollection: () => void;
}

export const CollectionDeleteModal = ({
  id,
  confirmDeleteCollection,
  cancelDeleteCollection,
}: Props) => {
  const { collections } = useContext(CollectionsContext);
  const collection = collections.find((collection) => collection.id === id);

  if (!collection) return null;

  return (
    <Grid
      container
      justifyItems="center"
      textAlign="center"
      sx={{ p: 2, pt: 3 }}
    >
      <Grid item xs={12}>
        <Stack>
          <DialogTitle>Delete Collection</DialogTitle>
          <DialogContentText>
            You are about to delete <b>{collection.category_name}</b>{' '}
            collection. <br />
            Are you sure you want to do this?
          </DialogContentText>
          <DialogActions>
            <Grid container>
              <>
                <Grid item xs={12} sm={6} sx={{ mt: 1 }}>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={cancelDeleteCollection}
                  >
                    Cancel
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6} sx={{ mt: 1 }}>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={confirmDeleteCollection}
                  >
                    Delete
                  </Button>
                </Grid>
              </>
            </Grid>
          </DialogActions>
        </Stack>
      </Grid>
    </Grid>
  );
};
