import { useContext } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
  useTheme,
} from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '../utils/IconButton';
import { ActionIconButton } from '../utils/ActionIconButton';
import { BottomBorderActionStyle } from '@/components/theme/styles/BottomBorderAction';
import { getCollectionById } from '@/api/collection/CollectionService';
import { CollectionsContext } from '@/context/CollectionsContext';

type CollectionCardProps = {
  title: string;
  id: string;
  handleDelete: (id: string) => void;
};

export const CollectionCard = ({
  title,
  id,
  handleDelete,
}: CollectionCardProps) => {
  const theme = useTheme();
  const { collections } = useContext(CollectionsContext);
  const collection = getCollectionById(id, collections);

  const handleClickDelete = () => {
    handleDelete(id);
  };

  return (
    <Card sx={BottomBorderActionStyle(theme)}>
      <CardContent>
        <Grid
          container
          justifyContent={'center'}
          alignItems={'center'}
          sx={{
            pt: 5,
            pb: 2,
          }}
        >
          <Typography variant="h2">{title}</Typography>
        </Grid>
      </CardContent>
      <CardActions>
        <Grid container justifyContent="space-between">
          <Grid item>
            <IconButton
              onClick={handleClickDelete}
              title="Delete"
              icon={<DeleteIcon />}
              size="small"
              variant="text"
              sx={{
                opacity: 0.5,
              }}
            />
          </Grid>
          <Grid item>
            <ActionIconButton
              href={`/collection/${id}/quiz?cardId=${collection.flashcards[0].id}`}
              title="Quiz"
              icon={<PlayCircleOutlineIcon />}
            />
            <ActionIconButton
              href={`/collection/${id}/edit`}
              title="Edit"
              icon={<EditIcon />}
            />
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};
