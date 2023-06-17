import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Stack, Button, Grid, Alert } from '@mui/material';
import type { DeepPartial, FieldValues } from 'react-hook-form';
import { useForm, FormProvider } from 'react-hook-form';

interface FormAdapterProps<FormData extends FieldValues> {
  children: React.ReactNode;
  initialValues: DeepPartial<FormData>;
  validationSchema?: yup.AnyObjectSchema;
  onSubmit: (formData: FormData) => void;
}

export const FormAdapter = <FormData extends FieldValues>({
  children,
  initialValues,
  validationSchema,
  onSubmit,
}: FormAdapterProps<FormData>) => {
  const resolver = validationSchema ? yupResolver(validationSchema) : undefined;
  const formContext = useForm<FormData>({
    defaultValues: initialValues,
    resolver,
  });
  const { handleSubmit } = formContext;
  const { errors, isSubmitting, submitCount, isSubmitSuccessful } =
    formContext.formState;
  const hasValidationError = !!Object.keys(errors).length;
  const disableSubmit =
    isSubmitting || isSubmitSuccessful || hasValidationError;
  const isGenericErrorDisplayed = hasValidationError && !!submitCount;

  return (
    <FormProvider {...formContext}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          {children}
          {isGenericErrorDisplayed && (
            <Alert severity="error">
              There were some issues with data you provided, please check the
              highlighted fields
            </Alert>
          )}
          <Grid container justifyContent="flex-end">
            <Button type="submit" variant="contained" disabled={disableSubmit}>
              Submit
            </Button>
          </Grid>
        </Stack>
      </form>
    </FormProvider>
  );
};
