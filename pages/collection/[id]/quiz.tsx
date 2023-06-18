import { CollectionQuiz } from '@/components/collectionQuiz/CollectionQuiz';
import { WithWindowTitle } from '@/components/utils/WithWindowTitle';
import { getQuizLayout } from '@/components/utils/layout';

const CollectionQuizPage = () => {
  return (
    <WithWindowTitle title={'Collection Quiz'}>
      <CollectionQuiz />
    </WithWindowTitle>
  );
};

CollectionQuizPage.getLayout = getQuizLayout;

export default CollectionQuizPage;
