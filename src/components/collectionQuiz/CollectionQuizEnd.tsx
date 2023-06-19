import Image from 'next/image';
import { Card, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { WithTooltip } from '../utils/WithTooltip';
import { FLIP_CARD_HEIGHT, FLIP_CARD_MIN_HEIGHT } from './flipCard/FlipCard';
import { FLIP_CARD_COUNTER_TOTAL_HEIGHT } from './flipCard/FlipCardCounter';
import type { CollectionWithId } from '@/data/types';

type CollectionQuizEndProps = {
  collection: CollectionWithId;
  correctAnswerCount: number;
};

export const CollectionQuizEnd = ({
  collection,
  correctAnswerCount,
}: CollectionQuizEndProps) => {
  const flashCardsTotalCount = collection.flashcards.length;

  return (
    <WithTooltip title={'Click to go back'} arrow={false}>
      <Link href="/" legacyBehavior>
        <Card
          sx={{
            position: 'relative',
            top: FLIP_CARD_COUNTER_TOTAL_HEIGHT,
            height: FLIP_CARD_HEIGHT,
            minHeight: FLIP_CARD_MIN_HEIGHT,
            '&:hover': {
              cursor: 'pointer',
              boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
            },
          }}
        >
          <Stack
            justifyContent="center"
            alignItems="center"
            sx={{ height: '100%' }}
          >
            <Image
              src="/congrats.png"
              priority
              width={335}
              height={250}
              alt="Quiz finished"
            />
            <Typography variant="h2">Congratulations!</Typography>
            <Typography>
              You have answered {correctAnswerCount}{' '}
              {correctAnswerCount > 1 ? 'questions' : 'question'} correctly out
              of {flashCardsTotalCount}{' '}
              {flashCardsTotalCount > 1 ? 'questions' : 'question'} questions!
            </Typography>
          </Stack>
        </Card>
      </Link>
    </WithTooltip>
  );
};
