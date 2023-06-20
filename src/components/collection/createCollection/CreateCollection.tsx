import { FormAdapter } from '../../utils/form-hooks-related/FormAdapter';
import { CollectionFormFields } from '../CollectionFormFields';
import { CollectionValidationSchema } from '../CollectionFormService';
import { useCreateCollection } from './useCreateCollection';

export const CreateCollection = () => {
  const { onSubmit } = useCreateCollection();

  return (
    <FormAdapter
      initialValues={{
        category_id: '',
        category_name: '',
        flashcards: [
          {
            question: '',
            answer: '',
          },
        ],
      }}
      onSubmit={onSubmit}
      validationSchema={CollectionValidationSchema}
    >
      <CollectionFormFields />
    </FormAdapter>
  );
};
