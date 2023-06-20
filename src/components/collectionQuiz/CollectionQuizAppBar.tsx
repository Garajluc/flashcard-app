import * as React from 'react';
import Link from 'next/link';
import { AppBar as MuiAppBar, Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import ClearIcon from '@mui/icons-material/Clear';
import { APP_BAR_HEIGHT } from '../utils/layout/LayoutDimensionsService';
import { IconButton } from '../utils/IconButton';
import { ActionIconButton } from '../utils/ActionIconButton';
import type { CollectionWithId } from '@/data/types';

type CollectionQuizAppBarProps = {
  collection: CollectionWithId;
  unansweredCardsCount: number;
};

export const CollectionQuizAppBar = ({
  collection,
  unansweredCardsCount,
}: CollectionQuizAppBarProps) => {
  const flashCardsTotalCount = collection.flashcards.length;
  const answeredCardsCount = flashCardsTotalCount - unansweredCardsCount;
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
                {answeredCardsCount}/{flashCardsTotalCount}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.primary"
                sx={{ flexGrow: 1, opacity: 0.5 }}
              >
                {collection.category_name}
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
    </Box>
  );
};
