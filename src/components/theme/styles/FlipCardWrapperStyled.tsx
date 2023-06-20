import { Grid, styled } from '@mui/material';
import {
  FLIP_CARD_HEIGHT,
  FLIP_CARD_MIN_HEIGHT,
} from '@/components/collectionQuiz/flipCard/FlipCard';

export const FlipCardWrapperStyled = styled(Grid)(() => ({
  backgroundColor: 'transparent',
  width: '100%',
  height: FLIP_CARD_HEIGHT,
  minHeight: FLIP_CARD_MIN_HEIGHT,
  perspective: '1000px',
}));
