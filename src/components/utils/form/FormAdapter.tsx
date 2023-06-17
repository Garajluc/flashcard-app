import { Stack, Button, Grid } from '@mui/material';
import { DeepPartial, FieldValues, useForm } from 'react-hook-form';

interface FormAdapterProps<FormData extends FieldValues> {
  children: React.ReactNode;
  initialValues: DeepPartial<FormData>;
  // validationSchema?: yup.AnyObjectSchema;
  onSubmit: (formData: FormData) => void;
}

export const FormAdapter = <FormData extends FieldValues>({
  children,
  initialValues,
  // validationSchema,
  onSubmit,
}: FormAdapterProps<FormData>) => {
  // const resolver = validationSchema ? yupResolver(validationSchema) : undefined;
  const formContext = useForm<FormData>({
    defaultValues: initialValues,
    // resolver,
  });
  const { handleSubmit } = formContext;
  const { errors, isSubmitting, isSubmitSuccessful } = formContext.formState;
  const hasValidationError = !!Object.keys(errors).length;
  const disableSubmit =
    isSubmitting || isSubmitSuccessful || hasValidationError;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack>{children}</Stack>
      <Grid container justifyContent="flex-end">
        <Button type="submit" variant="contained" disabled={disableSubmit}>
          Submit
        </Button>
      </Grid>
    </form>
  );
};
