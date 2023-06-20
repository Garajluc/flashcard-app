import { Stack, Typography } from '@mui/material';
import { WithCustomAppBar } from '../utils/WithCustomAppBar';
import { CollectionQuizEnd } from './CollectionQuizEnd';
import { FlipCard } from './flipCard/FlipCard';
import { useCollectionQuiz } from './useCollectionQuiz';
import { FlipCardCounter } from './flipCard/FlipCardCounter';
import { CollectionQuizAppBar } from './appBar/CollectionQuizAppBar';

export const CollectionQuiz = () => {
  const {
    activeCard,
    answeredCardsCount,
    correctAnswerCount,
    wrongAnswerCount,
    isIncorrectIncluded,
    handleKnown,
    handleStillLearning,
    handleIncludeIncorrect,
  } = useCollectionQuiz();

  if (!activeCard) {
    return (
      <WithCustomAppBar
        appBarComponent={
          <CollectionQuizAppBar answeredCardsCount={answeredCardsCount} />
        }
      >
        <CollectionQuizEnd correctAnswerCount={correctAnswerCount} />
      </WithCustomAppBar>
    );
  }

  return (
    <WithCustomAppBar
      appBarComponent={
        <CollectionQuizAppBar answeredCardsCount={answeredCardsCount} />
      }
    >
      <FlipCardCounter
        wrongAnswerCount={wrongAnswerCount}
        correctAnswerCount={correctAnswerCount}
      />
      <FlipCard
        key={activeCard.id}
        isIncorrectIncluded={isIncorrectIncluded}
        handleKnown={handleKnown}
        handleStillLearning={handleStillLearning}
        handleIncludeIncorrect={handleIncludeIncorrect}
        frontContent={
          <Typography variant="h5">{activeCard.question}</Typography>
        }
        backContent={
          <Stack>
            <Typography gutterBottom>{activeCard.question}</Typography>
            <Typography variant="h2">{activeCard.answer}</Typography>
          </Stack>
        }
      />
    </WithCustomAppBar>
  );
};
