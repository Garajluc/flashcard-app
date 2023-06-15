import Link from 'next/link';
import AddIcon from '@mui/icons-material/Add';
import { EmptyScreen } from '../utils/EmptyScreen';
import { PageTitle } from '../utils/PageTitle';
import { ActionButton } from '../utils/ActionButton';

export const Collections = () => {
  return (
    <>
      <PageTitle title="Collections" />
      <EmptyScreen
        title="Welcome aboard!"
        body={
          <>
            It seems like you haven&rsquo;t tried using flashcards yet.
            Don&rsquo;t worry, we&rsquo;ve got you covered. <br />
            Just click on &rsquo;Add Flash Card&rsquo; and create your very
            first flashcard. Let&rsquo;s get started on your learning journey!
          </>
        }
        actionButton={
          <Link passHref href={'/collection/create'} legacyBehavior>
            <ActionButton
              label="Add Flash Card"
              startIcon={<AddIcon fontSize="small" />}
            />
          </Link>
        }
      />
    </>
  );
};
