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
    handleKnown,
    handleStillLearning,
    handleIncludeIncorrect,
    handleShuffle,
  } = useCollectionQuiz();

  return (
    <WithCustomAppBar
      appBarComponent={
        <>
          <CollectionQuizAppBar collectionName={collection.category_name} />
          <LinearDeterminate progress={progress} />
        </>
      }
    >
      {activeCard ? (
        <FlipCard
          key={activeCard.id}
          frontContent={<>{activeCard.question}</>}
          backContent={
            <>
              {activeCard.question}
              {activeCard.answer}
            </>
          }
          correctAnswerCount={correctAnswerCount}
          wrongAnswerCount={wrongAnswerCount}
          includeIncorrect={includeIncorrect}
          handleKnown={handleKnown}
          handleStillLearning={handleStillLearning}
          handleIncludeIncorrect={handleIncludeIncorrect}
          handleShuffle={handleShuffle}
        />
      ) : (
        <CollectionQuizEnd />
      )}
    </WithCustomAppBar>
  );
};
