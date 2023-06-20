import { memo } from 'react';
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
import { ActionIconButton } from '../utils/ActionIconButton';
import { CollectionDeleteTrigger } from './CollectionDeleteTrigger';
import { BottomBorderActionStyle } from '@/components/theme/styles/BottomBorderAction';
import type { CollectionWithId } from '@/data/types';

type CollectionCardProps = {
  collection: CollectionWithId;
};

export const CollectionCard = memo(({ collection }: CollectionCardProps) => {
  const theme = useTheme();

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
          <Typography variant="h2">{collection.category_name}</Typography>
        </Grid>
      </CardContent>
      <CardActions>
        <Grid container justifyContent="space-between">
          <Grid item>
            <CollectionDeleteTrigger collection={collection} />
          </Grid>
          <Grid item>
            <ActionIconButton
              href={`/collection/${collection.id}/quiz?cardId=${collection.flashcards[0].id}`}
              title="Quiz"
              icon={<PlayCircleOutlineIcon />}
            />
            <ActionIconButton
              href={`/collection/${collection.id}/edit`}
              title="Edit"
              icon={<EditIcon />}
            />
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
});

CollectionCard.displayName = 'CollectionCard';
