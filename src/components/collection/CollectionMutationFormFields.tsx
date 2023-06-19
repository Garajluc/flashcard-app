import { Grid, Stack } from '@mui/material';
import { FlashcardFields } from './FlashcardFields';
import { useCollectionMutationFormFields } from './useCollectionMutationFormFields';
import { WithPageTitle } from '@/components/utils/WithPageTitle';
import { ControlledArrayField } from '@/components/utils/form-hooks-related/ControlledArrayField';
import { ControlledAutocomplete } from '@/components/utils/form-hooks-related/ControlledAutocomplete';

type CollectionMutationFormFieldsProps = { isUpdate?: boolean };

export const CollectionMutationFormFields = ({
  isUpdate,
}: CollectionMutationFormFieldsProps) => {
  const { options, setCategoryId } = useCollectionMutationFormFields();

  return (
    <WithPageTitle
      title={`${isUpdate ? 'Update' : 'Create'} Flashcard Collection`}
    >
      <Stack spacing={4}>
        <Grid container item xs={12} sm={7}>
          <ControlledAutocomplete
            name="category_name"
            label="Collection Name"
            helperText={'Select from existing collections or create a new one'}
            options={options}
            onBlur={setCategoryId}
          />
        </Grid>
        <ControlledArrayField
          arrayName="flashcards"
          Component={FlashcardFields}
        />
      </Stack>
    </WithPageTitle>
  );
};
