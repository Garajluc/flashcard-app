import { Stack, useTheme } from '@mui/material';
import type { UseFieldArrayRemove } from 'react-hook-form';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { ActionButton } from '../ActionButton';
import { BottomBorderActionStyle } from '@/components/theme/styles/BottomBorderAction';

interface ControlledArrayFieldProps<ArrayData> {
  arrayName: string;
  Component: (props: {
    field: Record<keyof ArrayData, string>;
    index: number;
    fieldCount: number;
    remove: UseFieldArrayRemove;
  }) => JSX.Element;
}

export const ControlledArrayField = <ArrayData extends object>({
  arrayName,
  Component,
}: ControlledArrayFieldProps<ArrayData>) => {
  const theme = useTheme();
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: arrayName,
  });

  return (
    <Stack spacing={2}>
      {fields.map((field, index, array) => (
        <Component
          field={field as Record<keyof ArrayData, string>}
          index={index}
          fieldCount={array.length}
          key={field.id}
          remove={remove}
        />
      ))}
      <Stack>
        <ActionButton
          onClick={() => append({ question: '', answer: '' })}
          label={'Append'}
          variant="text"
          sx={{
            py: 5,
            backgroundColor: theme.palette.background.paper,
            ...BottomBorderActionStyle(theme),
          }}
        />
      </Stack>
    </Stack>
  );
};
