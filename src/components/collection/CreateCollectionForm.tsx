import { FormAdapter } from '../utils/form-hooks-related/FormAdapter';
import { CreateCollectionFormFields } from './CreateCollectionFormFields';
import { CollectionValidationSchema } from './CreateCollectionServiceForm';
import { useCreateCollectionForm } from './useCreateCollectionForm';

export const CreateCollectionForm = () => {
  const { onSubmit } = useCreateCollectionForm();

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
      <CreateCollectionFormFields />
    </FormAdapter>
  );
};
