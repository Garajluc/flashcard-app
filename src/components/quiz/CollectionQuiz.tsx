import { LinearDeterminate } from '../utils/LinearDeterminate';
import { WithCustomAppBar } from '../utils/WithCustomAppBar';
import { CollectionQuizAppBar } from './CollectionQuizAppBar';
import { FlipCard } from './FlipCard';
import { useCollectionQuiz } from './useCollectionQuiz';

export const CollectionQuiz = () => {
  const {
    collection,
    activeCard,
    progress,
    correctAnswerCount,
    wrongAnswerCount,
    handleKnown,
    handleStillLearning,
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
          frontContent={activeCard.question}
          backContent={activeCard.answer}
          correctAnswerCount={correctAnswerCount}
          wrongAnswerCount={wrongAnswerCount}
          handleKnown={handleKnown}
          handleStillLearning={handleStillLearning}
        />
      ) : (
        <>Finish</>
      )}
    </WithCustomAppBar>
  );
};
