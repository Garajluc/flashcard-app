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
import { IconButton } from '../utils/IconButton';
import { BottomBorderActionStyle } from '@/components/theme/styles/BottomBorderAction';

type CollectionCardProps = {
  title: string;
};

export const CollectionCard = ({ title }: CollectionCardProps) => {
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
          <Typography variant="h2">{title}</Typography>
        </Grid>
      </CardContent>
      <CardActions>
        <Grid container justifyContent="flex-end">
          <IconButton
            title="Play"
            icon={<PlayCircleOutlineIcon />}
            size="small"
            variant="text"
          />
          <IconButton
            title="Detail"
            icon={<EditIcon />}
            size="small"
            variant="text"
          />
        </Grid>
      </CardActions>
    </Card>
  );
};
