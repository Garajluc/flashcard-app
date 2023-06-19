import Link from 'next/link';
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
import { BottomBorderActionStyle } from '@/components/theme/styles/BottomBorderAction';

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
            <Link passHref href={`/collection/${id}/quiz`} legacyBehavior>
              <IconButton
                title="Quiz"
                icon={<PlayCircleOutlineIcon />}
                size="small"
                variant="text"
              />
            </Link>
            <Link passHref href={`/collection/${id}/edit`} legacyBehavior>
              <IconButton
                title="Edit"
                icon={<EditIcon />}
                size="small"
                variant="text"
              />
            </Link>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};
