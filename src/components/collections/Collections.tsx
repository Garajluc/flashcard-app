import Link from 'next/link';
import AddIcon from '@mui/icons-material/Add';
import { EmptyScreen } from '../utils/EmptyScreen';
import { ActionButton } from '../utils/ActionButton';
import { WithLoading } from '../utils/WithLoading';
import { WithPageTitle } from '../utils/WithPageTitle';
import { APIErrorAlert } from '../utils/APIErrorAlert';
import { useCollections } from './useCollections';
import { CollectionCardList } from './CollectionCardList';

export const Collections = () => {
  const { hasData, collections } = useCollections();

  return (
    <WithPageTitle title="Collections">
      <WithLoading loading={false}>
        {!hasData && (
          <EmptyScreen
            title="Welcome aboard!"
            body={
              <>
                It seems like you haven&rsquo;t tried using flashcards yet.
                Don&rsquo;t worry, we&rsquo;ve got you covered. <br />
                Just click on &rsquo;Add Flash Card&rsquo; and create your very
                first flashcard. Let&rsquo;s get started on your learning
                journey!
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
        )}
        {hasData && <CollectionCardList collections={collections ?? []} />}
      </WithLoading>
      <APIErrorAlert error={undefined} />
    </WithPageTitle>
  );
};
