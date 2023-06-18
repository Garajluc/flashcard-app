import { Grid, Typography, useTheme } from '@mui/material';
import { Chip } from '@/components/utils/Chip';

type FlipCardCounterProps = {
  correctAnswerCount: number;
  wrongAnswerCount: number;
};

const FLIP_CARD_COUNTER_MB = '40px';
const FLIP_CARD_COUNTER_HEIGHT = '25px';
export const FLIP_CARD_COUNTER_TOTAL_HEIGHT = `calc(${FLIP_CARD_COUNTER_MB} + ${FLIP_CARD_COUNTER_HEIGHT})`;

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
        mb: FLIP_CARD_COUNTER_MB,
        height: FLIP_CARD_COUNTER_HEIGHT,
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
