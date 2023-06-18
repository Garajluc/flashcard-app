import type { ReactElement } from 'react';
import { Box, Stack, useTheme } from '@mui/material';
import {
  CONTENT_HEIGHT,
  CONTENT_HEIGHT_NO_APP_BAR,
} from '../LayoutDimensionsService';
import { AppBar } from './AppBar';
import { Footer } from './Footer';

type PageLayoutProps = {
  children: ReactElement;
  variant?: 'default' | 'quiz';
};

export const PageLayout = ({
  children,
  variant = 'default',
}: PageLayoutProps) => {
  const theme = useTheme();
  const isQuiz = variant === 'quiz';

  if (isQuiz) {
    return (
      <>
        <Box
          sx={{
            minHeight: CONTENT_HEIGHT_NO_APP_BAR,
            backgroundColor: theme.palette.background.default,
          }}
        >
          {children}
        </Box>
        <Footer />
      </>
    );
  }

  return (
    <>
      <AppBar />
      <Stack
        sx={{
          minHeight: CONTENT_HEIGHT,
          maxWidth: '75vw',
          margin: 'auto',
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
