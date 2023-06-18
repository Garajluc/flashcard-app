import { useCallback, useState } from 'react';
import { Grid, Box, styled } from '@mui/material';
import { WithTooltip } from '../../utils/WithTooltip';
import { FlipCardActionButtons } from './FlipCardActionButtons';
import { FlipCardCounter } from './FlipCardCounter';

export const FLIP_CARD_HEIGHT = '60vh';
export const FLIP_CARD_MIN_HEIGHT = '350px';

const FlipCardWrapperStyled = styled(Grid)(() => ({
  backgroundColor: 'transparent',
  width: '100%',
  height: FLIP_CARD_HEIGHT,
  minHeight: FLIP_CARD_MIN_HEIGHT,
  perspective: '1000px',
}));

interface FlipCardStyledProps {
  flip: boolean;
}

const FlipCardStyled = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'flip',
})(({ flip }: FlipCardStyledProps) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  textAlign: 'center',
  transition: 'transform 0.8s',
  transformStyle: 'preserve-3d',
  ...(flip && {
    transform: 'rotateY(180deg)',
  }),
}));

interface FlipCardSideStyledProps {
  isBackSide?: boolean;
}

const FlipCardSideStyled = styled(Grid, {
  shouldForwardProp: (prop) => prop !== 'isBackSide',
})(({ isBackSide }: FlipCardSideStyledProps) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  padding: '16px',
  borderRadius: '4px',
  backgroundColor: '#fff',
  backfaceVisibility: 'hidden',
  transition: 'box-shadow 0.4s',
  ...(isBackSide && {
    transform: 'rotateY(180deg)',
  }),
  ...(!isBackSide && {
    '&:hover': {
      cursor: 'pointer',
      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    },
  }),
}));

type FlipCardProps = {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  correctAnswerCount: number;
  wrongAnswerCount: number;
  handleKnown: () => void;
  handleStillLearning: () => void;
};

export const FlipCard = ({
  frontContent,
  backContent,
  correctAnswerCount,
  wrongAnswerCount,
  handleKnown,
  handleStillLearning,
}: FlipCardProps) => {
  const [flip, setFlip] = useState(false);

  const handleFlip = useCallback(() => {
    setFlip(true);
  }, []);

  return (
    <Grid container justifyContent={'center'} onClick={handleFlip}>
      <FlipCardCounter
        wrongAnswerCount={wrongAnswerCount}
        correctAnswerCount={correctAnswerCount}
      />
      <FlipCardWrapperStyled item>
        <FlipCardStyled flip={flip}>
          <WithTooltip title={'Click to see the answer'} arrow={false}>
            <FlipCardSideStyled
              container
              justifyContent="center"
              alignItems="center"
            >
              {frontContent}
            </FlipCardSideStyled>
          </WithTooltip>
          <FlipCardSideStyled container isBackSide={true}>
            <Grid
              item
              container
              justifyContent="center"
              alignItems="center"
              sx={{ height: '80%' }}
            >
              {backContent}
            </Grid>
            <Grid container item>
              <FlipCardActionButtons
                handleKnown={handleKnown}
                handleStillLearning={handleStillLearning}
              />
            </Grid>
          </FlipCardSideStyled>
        </FlipCardStyled>
      </FlipCardWrapperStyled>
    </Grid>
  );
};
