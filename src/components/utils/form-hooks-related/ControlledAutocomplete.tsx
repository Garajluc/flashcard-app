import type { FilterOptionsState, StandardTextFieldProps } from '@mui/material';
import { Autocomplete, TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

export type Option = string;
interface ControlledAutocompleteProps {
  name: string;
  options: Option[];
  disabled?: boolean;
  label?: React.ReactNode;
  helperText?: string;
  variant?: StandardTextFieldProps['variant'];
  onChange?: (selectedOptions: Option | Option[]) => void;
  onBlur?: (event: React.FocusEvent<HTMLDivElement, Element>) => void;
}

export const ControlledAutocomplete = ({
  name,
  options,
  label,
  helperText,
  variant = 'standard',
  disabled,
  onChange,
  onBlur,
}: ControlledAutocompleteProps) => {
  const { control } = useFormContext();

  const handleChange = (selectedOptions: Option | Option[] | null) => {
    onChange?.(selectedOptions as Option | Option[]);
  };

  const handleBlur = (event: React.FocusEvent<HTMLDivElement, Element>) => {
    onBlur?.(event);
  };

  const handleFilterOptions = (
    options: Option[],
    state: FilterOptionsState<Option>
  ) => {
    const { inputValue } = state;
    const isExisting = options.some((option) => inputValue === option);

    if (inputValue !== '' && !isExisting) {
      options.push(inputValue);
    }

    return options;
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ...renderProps }, fieldState: { error } }) => (
        <Autocomplete
          {...renderProps}
          disabled={disabled}
          options={options}
          filterSelectedOptions
          filterOptions={handleFilterOptions}
          onChange={(_, data) => {
            renderProps.onChange(data);
            handleChange(data);
          }}
          onBlur={handleBlur}
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth
              label={label}
              id={`${name}-input`}
              variant={variant}
              error={!!error}
              helperText={error?.message || helperText}
            />
          )}
        />
      )}
    />
  );
};
