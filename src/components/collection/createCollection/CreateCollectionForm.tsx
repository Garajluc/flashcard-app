import { FormAdapter } from '../../utils/form-hooks-related/FormAdapter';
import { CollectionMutationFormFields } from '../CollectionMutationFormFields';
import { CollectionValidationSchema } from '../CollectionFormService';
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
      <CollectionMutationFormFields />
    </FormAdapter>
  );
};
