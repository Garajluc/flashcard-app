import { Grid, Stack } from '@mui/material';
import { WithPageTitle } from '../utils/WithPageTitle';
import { ControlledArrayField } from '../utils/form-hooks-related/ControlledArrayField';
import { ControlledAutocomplete } from '../utils/form-hooks-related/ControlledAutocomplete';
import { FlashcardFields } from './FlashcardFields';
import { useCreateCollectionFormFields } from './useCreateCollectionFormFields';

export const CreateCollectionFormFields = () => {
  const { options, setCategoryId } = useCreateCollectionFormFields();

  return (
    <WithPageTitle title="Create flashcard Collection">
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
