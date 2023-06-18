import { LinearDeterminate } from '../utils/LinearDeterminate';
import { WithCustomAppBar } from '../utils/WithCustomAppBar';
import { CollectionQuizAppBar } from './CollectionQuizAppBar';
import { useCollectionQuiz } from './useCollectionQuiz';

export const CollectionQuiz = () => {
  const { collection, progress } = useCollectionQuiz();

  return (
    <WithCustomAppBar
      appBarComponent={
        <>
          <CollectionQuizAppBar collectionName={collection.category_name} />
          <LinearDeterminate progress={progress} />
        </>
      }
    >
      Quiz
    </WithCustomAppBar>
  );
};
