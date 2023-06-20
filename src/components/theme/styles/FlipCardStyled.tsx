import { styled, Box } from '@mui/material';

interface FlipCardStyledProps {
  flip: boolean;
}

export const FlipCardStyled = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'flip',
})(({ flip }: FlipCardStyledProps) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  textAlign: 'center',
  transition: 'transform 0.8s',
  transformStyle: 'preserve-3d',
  ...(flip && {
    transform: 'rotateY(-180deg)',
  }),
}));
