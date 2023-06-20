import * as React from 'react';
import { AppBar as MuiAppBar } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import { APP_BAR_HEIGHT } from '../LayoutDimensionsService';
import { ActionIconButton } from '../../ActionIconButton';

export const AppBar = () => {
  return (
    <Box sx={{ flexGrow: 1, height: APP_BAR_HEIGHT }}>
      <MuiAppBar position="static" elevation={0}>
        <Toolbar>
          <ActionIconButton
            href="/"
            title="Back to collections"
            icon={
              <Image
                src="/flash-cards-logo.png"
                alt="Logo of Flash Cards"
                width={25}
                height={25}
              />
            }
          />
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
};
