import type { ReactElement } from 'react';
import { Box } from '@mui/material';
import { CONTENT_HEIGHT, FULL_HEIGHT } from '../LayoutDimensionsService';
import { AppBar } from './AppBar';
import { Footer } from './Footer';

type PageLayoutProps = {
  children: ReactElement;
};

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <Box sx={{ height: FULL_HEIGHT }}>
      <AppBar />
      <Box
        sx={{
          height: CONTENT_HEIGHT,
          px: 10,
          py: 5,
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};
