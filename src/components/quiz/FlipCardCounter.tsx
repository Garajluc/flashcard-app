import { Grid, Typography, useTheme } from '@mui/material';
import { Chip } from '../utils/Chip';

type FlipCardCounterProps = {
  correctAnswerCount: number;
  wrongAnswerCount: number;
};

export const FlipCardCounter = ({
  correctAnswerCount,
  wrongAnswerCount,
}: FlipCardCounterProps) => {
  const theme = useTheme();

  return (
    <Grid
      container
      item
      justifyContent={'space-between'}
      sx={{
        mb: 5,
      }}
    >
      <Grid item>
        <Chip
          label={wrongAnswerCount}
          color="error"
          variant="outlined"
          size="small"
        />
        <Typography
          variant="body2"
          display="inline"
          sx={{ ml: 1, color: theme.palette.error.main }}
        >
          Still learning
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          variant="body2"
          display="inline"
          sx={{ mr: 1, color: theme.palette.success.main }}
        >
          Known
        </Typography>
        <Chip
          label={correctAnswerCount}
          color="success"
          variant="outlined"
          size="small"
        />
      </Grid>
    </Grid>
  );
};
