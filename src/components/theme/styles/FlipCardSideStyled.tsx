import { styled, Grid } from '@mui/material';

interface FlipCardSideStyledProps {
  isBackSide?: boolean;
}

export const FlipCardSideStyled = styled(Grid, {
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
