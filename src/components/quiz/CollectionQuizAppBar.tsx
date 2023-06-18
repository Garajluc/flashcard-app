import * as React from 'react';
import Link from 'next/link';
import { AppBar as MuiAppBar, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import ClearIcon from '@mui/icons-material/Clear';
import { APP_BAR_HEIGHT } from '../utils/layout/LayoutDimensionsService';
import { IconButton } from '../utils/IconButton';

type CollectionQuizAppBarProps = {
  collectionName: string;
};

export const CollectionQuizAppBar = ({
  collectionName,
}: CollectionQuizAppBarProps) => {
  return (
    <Box sx={{ height: APP_BAR_HEIGHT }}>
      <MuiAppBar position="static" elevation={0}>
        <Toolbar>
          <Link href="/">
            <IconButton
              title="Home"
              icon={
                <Image
                  src="/flash-cards-logo.png"
                  alt="Logo of Flash Cards"
                  width={25}
                  height={25}
                />
              }
            />
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Typography
            variant="h4"
            color="text.primary"
            sx={{ flexGrow: 1, opacity: 0.5 }}
          >
            {collectionName}
          </Typography>
          <Link href="/">
            <IconButton
              title="Close"
              icon={<ClearIcon />}
              size="small"
              variant="text"
            />
          </Link>
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
};
