import type { ReactElement } from 'react';
import type { Theme } from '@mui/material';
import { Box, Stack, useMediaQuery } from '@mui/material';
import { CONTENT_HEIGHT, FULL_HEIGHT } from '../LayoutDimensionsService';
import { AppBar } from './AppBar';
import { Footer } from './Footer';
import { theme } from '@/theme';

type PageLayoutProps = {
  children: ReactElement;
};

export const PageLayout = ({ children }: PageLayoutProps) => {
  const matchDownSM = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm')
  );

  return (
    <Box sx={{ height: FULL_HEIGHT }}>
      <AppBar />
      <Stack
        sx={{
          position: 'relative',
          height: CONTENT_HEIGHT,
          px: matchDownSM ? 5 : 10,
          py: 5,
          backgroundColor: theme.palette.background.default,
        }}
      >
        {children}
      </Stack>
      <Footer />
    </Box>
  );
};
