import { Card, Grid } from '@mui/material';
import Link from 'next/link';
import { WithTooltip } from '../utils/WithTooltip';
import { FLIP_CARD_HEIGHT, FLIP_CARD_MIN_HEIGHT } from './flipCard/FlipCard';
import { FLIP_CARD_COUNTER_TOTAL_HEIGHT } from './flipCard/FlipCardCounter';

export const CollectionQuizEnd = () => {
  return (
    <Link href="/">
      <WithTooltip title={'Click to go back'} arrow={false}>
        <Card
          sx={{
            position: 'relative',
            top: FLIP_CARD_COUNTER_TOTAL_HEIGHT,
            height: FLIP_CARD_HEIGHT,
            minHeight: FLIP_CARD_MIN_HEIGHT,
            '&:hover': {
              boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
            },
          }}
        >
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{
              height: '100%',
            }}
          >
            Congratulations!
          </Grid>
        </Card>
      </WithTooltip>
    </Link>
  );
};
