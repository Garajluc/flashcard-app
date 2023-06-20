import { Grid, Stack } from '@mui/material';
import { FlashcardFields } from './FlashcardFields';
import { useCollectionFormFields } from './useCollectionFormFields';
import { WithPageTitle } from '@/components/utils/WithPageTitle';
import { ControlledArrayField } from '@/components/utils/form-hooks-related/ControlledArrayField';
import { ControlledAutocomplete } from '@/components/utils/form-hooks-related/ControlledAutocomplete';

type CollectionFormFieldsProps = { isUpdate?: boolean };

export const CollectionFormFields = ({
  isUpdate,
}: CollectionFormFieldsProps) => {
  const { options, setCategoryId } = useCollectionFormFields();

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
            disabled={isUpdate}
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
