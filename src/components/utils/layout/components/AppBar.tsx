import * as React from 'react';
import Link from 'next/link';
import { AppBar as MuiAppBar } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import { APP_BAR_HEIGHT } from '../LayoutDimensionsService';

export const AppBar = () => {
  return (
    <Box sx={{ flexGrow: 1, height: APP_BAR_HEIGHT }}>
      <MuiAppBar position="static" elevation={0}>
        <Toolbar>
          <Link href="/">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo"
            >
              <Image
                src="/flash-cards-logo.png"
                alt="Logo of Flash Cards"
                width={25}
                height={25}
              />
            </IconButton>
          </Link>
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
};
