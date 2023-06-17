import { WithPageTitle } from '../utils/WithPageTitle';
import { ControlledAutocomplete } from '../utils/form-hooks-related/ControlledAutocomplete';
import { useCreateCollectionFormFields } from './useCreateCollectionFormFields';

export const CreateCollectionFormFields = () => {
  const { options, setCategoryId } = useCreateCollectionFormFields();

  return (
    <WithPageTitle title="Create flashcard Collection">
      <ControlledAutocomplete
        name="category_name"
        label="Collection Name"
        helperText={'Select from existing collections or create a new one'}
        options={options}
        onBlur={setCategoryId}
      />
    </WithPageTitle>
  );
};
