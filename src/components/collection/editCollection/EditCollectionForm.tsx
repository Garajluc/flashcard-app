import { FormAdapter } from '../../utils/form-hooks-related/FormAdapter';
import { CollectionMutationFormFields } from '../CollectionMutationFormFields';
import { CollectionValidationSchema } from '../CollectionFormService';
import { useEditCollectionForm } from './useEditCollectionForm';

export const EditCollectionForm = () => {
  const { collection, onSubmit } = useEditCollectionForm();

  return (
    <FormAdapter
      initialValues={collection}
      onSubmit={onSubmit}
      validationSchema={CollectionValidationSchema}
    >
      <CollectionMutationFormFields />
    </FormAdapter>
  );
};
