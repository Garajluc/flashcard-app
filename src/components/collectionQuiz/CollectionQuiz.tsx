import { Grid, Typography } from '@mui/material';
import { LinearDeterminate } from '../utils/LinearDeterminate';
import { WithCustomAppBar } from '../utils/WithCustomAppBar';
import { CollectionQuizAppBar } from './CollectionQuizAppBar';
import { CollectionQuizEnd } from './CollectionQuizEnd';
import { FlipCard } from './flipCard/FlipCard';
import { useCollectionQuiz } from './useCollectionQuiz';

export const CollectionQuiz = () => {
  const {
    collection,
    activeCard,
    progress,
    correctAnswerCount,
    wrongAnswerCount,
    includeIncorrect,
    unansweredCards,
    handleKnown,
    handleStillLearning,
    handleIncludeIncorrect,
    handleShuffle,
  } = useCollectionQuiz();

  return (
    <WithCustomAppBar
      appBarComponent={
        <>
          <CollectionQuizAppBar
            collection={collection}
            unansweredCardsCount={unansweredCards.length}
          />
          <LinearDeterminate progress={progress} />
        </>
      }
    >
      {activeCard && unansweredCards.length > 0 && (
        <FlipCard
          key={activeCard.id}
          frontContent={
            <Typography variant="h5">{activeCard.question}</Typography>
          }
          backContent={
            <Grid container justifyContent="center" alignItems="center">
              <Grid item xs={12}>
                <Typography variant="h4" sx={{ opacity: 0.5 }} gutterBottom>
                  {activeCard.question}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h2">{activeCard.answer}</Typography>
              </Grid>
            </Grid>
          }
          correctAnswerCount={correctAnswerCount}
          wrongAnswerCount={wrongAnswerCount}
          includeIncorrect={includeIncorrect}
          handleKnown={handleKnown}
          handleStillLearning={handleStillLearning}
          handleIncludeIncorrect={handleIncludeIncorrect}
          handleShuffle={handleShuffle}
        />
      )}
      {unansweredCards.length === 0 && (
        <CollectionQuizEnd
          collection={collection}
          correctAnswerCount={correctAnswerCount}
        />
      )}
    </WithCustomAppBar>
  );
};
