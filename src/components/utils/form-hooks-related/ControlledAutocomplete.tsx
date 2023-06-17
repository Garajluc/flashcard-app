import type { FilterOptionsState } from '@mui/material';
import { Autocomplete, TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

export type Option = string;
interface Props {
  name: string;
  options: Option[];
  label?: React.ReactNode;
  helperText?: string;
  onChange?: (selectedOptions: Option | Option[]) => void;
  onBlur?: (event: React.FocusEvent<HTMLDivElement, Element>) => void;
}

export const ControlledAutocomplete = ({
  name,
  options,
  label,
  helperText,
  onChange,
  onBlur,
}: Props) => {
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
              label={label}
              id={`${name}-input`}
              variant="standard"
              error={!!error}
              helperText={error?.message || helperText}
            />
          )}
        />
      )}
    />
  );
};
