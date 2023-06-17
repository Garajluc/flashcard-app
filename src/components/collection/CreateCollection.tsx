import { WithPageTitle } from '../utils/WithPageTitle';
import { FormAdapter } from '../utils/form/FormAdapter';
import { CollectionValidationSchema } from './CreateCollectionService';
import { useCreateCollections } from './useCreateCollection';

export const CreateCollection = () => {
  const { onSubmit } = useCreateCollections();

  return (
    <FormAdapter
      onSubmit={onSubmit}
      initialValues={{
        category_id: '',
        category_name: '',
        flashcards: [
          {
            category_id: '',
            question: '',
            answer: '',
          },
        ],
      }}
      validationSchema={CollectionValidationSchema}
    >
      <WithPageTitle title="Create flashcard Collection">
        <></>
      </WithPageTitle>
    </FormAdapter>
  );
};
