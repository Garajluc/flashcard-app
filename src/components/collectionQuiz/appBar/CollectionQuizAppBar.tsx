import * as React from 'react';
import Link from 'next/link';
import { AppBar as MuiAppBar, Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import ClearIcon from '@mui/icons-material/Clear';
import { APP_BAR_HEIGHT } from '../../utils/layout/LayoutDimensionsService';
import { IconButton } from '../../utils/IconButton';
import { ActionIconButton } from '../../utils/ActionIconButton';
import { LinearDeterminate } from '../../utils/LinearDeterminate';
import { useCollectionQuizAppBar } from './useCollectionQuizAppBar';

type CollectionQuizAppBarProps = {
  answeredCardsCount: number;
};

export const CollectionQuizAppBar = ({
  answeredCardsCount,
}: CollectionQuizAppBarProps) => {
  const { progress, cardsTotalCount, collectionName } = useCollectionQuizAppBar(
    { answeredCardsCount }
  );

  return (
    <Box sx={{ height: APP_BAR_HEIGHT }}>
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
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <Stack alignItems={'center'}>
              <Typography
                variant="h4"
                color="text.primary"
                sx={{ flexGrow: 1, opacity: 0.5 }}
              >
                {answeredCardsCount}/{cardsTotalCount}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.primary"
                sx={{ flexGrow: 1, opacity: 0.5 }}
              >
                {collectionName}
              </Typography>
            </Stack>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
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
      <LinearDeterminate progress={progress} />
    </Box>
  );
};
