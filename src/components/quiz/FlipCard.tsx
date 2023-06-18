import { useCallback, useState } from 'react';
import { Button, Grid, Box, styled } from '@mui/material';

const FlipCardWrapperStyled = styled(Grid)(() => ({
  backgroundColor: 'transparent',
  width: '100%',
  height: '400px',
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
  backgroundColor: '#fff',
  backfaceVisibility: 'hidden',
  ...(isBackSide && {
    transform: 'rotateY(180deg)',
  }),
}));

type FlipCardProps = {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
};

export const FlipCard = ({ frontContent, backContent }: FlipCardProps) => {
  const [flip, setFlip] = useState(false);

  const handleFlip = useCallback(() => {
    setFlip(true);
  }, []);

  return (
    <>
      <Grid container justifyContent={'center'}>
        <FlipCardWrapperStyled item>
          <FlipCardStyled flip={flip}>
            <FlipCardSideStyled
              container
              justifyContent="center"
              alignItems="center"
            >
              {frontContent}
            </FlipCardSideStyled>
            <FlipCardSideStyled
              container
              justifyContent="center"
              alignItems="center"
              isBackSide={true}
            >
              {backContent}
            </FlipCardSideStyled>
          </FlipCardStyled>
        </FlipCardWrapperStyled>
      </Grid>
      <Button onClick={handleFlip}>Flip</Button>
    </>
  );
};
