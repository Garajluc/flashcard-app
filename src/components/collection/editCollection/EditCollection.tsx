import { FormAdapter } from '../../utils/form-hooks-related/FormAdapter';
import { CollectionFormFields } from '../CollectionFormFields';
import { CollectionValidationSchema } from '../CollectionFormService';
import { useEditCollection } from './useEditCollection';

export const EditCollection = () => {
  const { collection, onSubmit } = useEditCollection();

  return (
    <FormAdapter
      initialValues={collection}
      onSubmit={onSubmit}
      validationSchema={CollectionValidationSchema}
    >
      <CollectionFormFields isUpdate />
    </FormAdapter>
  );
};
