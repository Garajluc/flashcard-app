import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
  styled,
} from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '../utils/IconButton';

type CollectionCardProps = {
  title: string;
};

const CardStyled = styled(Card)(({ theme }) => ({
  '&:hover': {
    borderBottom: `4px solid ${theme.palette.primary.light}`,
    '& .MuiTypography-root': {
      color: theme.palette.primary.light,
      cursor: 'default',
    },
  },
}));

export const CollectionCard = ({ title }: CollectionCardProps) => {
  return (
    <CardStyled>
      <CardContent>
        <Grid
          container
          justifyContent={'center'}
          alignItems={'center'}
          sx={{
            p: 5,
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
    </CardStyled>
  );
};
