import {
  Button,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogTitle,
  Grid,
  Stack,
} from '@mui/material';

interface CollectionDeleteTriggerProps {
  name: string;
  isOpen: boolean;
  cancelDeleteCollection: () => void;
  confirmDeleteCollection: () => void;
}

export const CollectionDeleteModal = ({
  name,
  isOpen,
  cancelDeleteCollection,
  confirmDeleteCollection,
}: CollectionDeleteTriggerProps) => (
  <Dialog fullWidth maxWidth="xs" open={isOpen}>
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
            You are about to delete <b>{name}</b> collection. <br />
            Are you sure you want to do this?
          </DialogContentText>
          <DialogActions>
            <Grid container>
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
            </Grid>
          </DialogActions>
        </Stack>
      </Grid>
    </Grid>
  </Dialog>
);
