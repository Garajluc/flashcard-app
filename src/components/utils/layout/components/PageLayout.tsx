import type { ReactElement } from 'react';
import { Stack, useTheme } from '@mui/material';
import { CONTENT_HEIGHT } from '../LayoutDimensionsService';
import { AppBar } from './AppBar';
import { Footer } from './Footer';

type PageLayoutProps = {
  children: ReactElement;
};

export const PageLayout = ({ children }: PageLayoutProps) => {
  const theme = useTheme();

  return (
    <>
      <AppBar />
      <Stack
        sx={{
          position: 'relative',
          minHeight: CONTENT_HEIGHT,
          maxWidth: '75vw',
          margin: '0 auto',
          py: 5,
          backgroundColor: theme.palette.background.default,
        }}
      >
        {children}
      </Stack>
      <Footer />
    </>
  );
};
