import type { ChangeEvent, FocusEvent, MouseEvent } from 'react';
import { useCallback } from 'react';
import type { StandardTextFieldProps } from '@mui/material';
import { TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

interface Props extends StandardTextFieldProps {
  name: string;
  label?: React.ReactNode;
  onBlur?: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  onChange?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  disabled?: boolean;
  variant?: StandardTextFieldProps['variant'];
}

export const ControlledTextField = ({
  label,
  name,
  disabled,
  onBlur,
  onClick,
  onChange,
  helperText,
  variant = 'standard',
  ...restTextFieldProps
}: Props) => {
  const { control } = useFormContext();

  const handleOnBlurTextField = useCallback(
    (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      onBlur?.(e);
    },
    [onBlur]
  );

  const handleOnClickTextField = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      onClick?.(e);
    },
    [onClick]
  );

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          label={label}
          id={`${name}-input`}
          error={!!error}
          helperText={error?.message || helperText}
          disabled={disabled}
          inputRef={field.ref}
          onBlur={handleOnBlurTextField}
          onClick={handleOnClickTextField}
          onChange={(e) => {
            field.onChange(e);
            onChange?.(e);
          }}
          variant={variant}
          {...restTextFieldProps}
        />
      )}
    />
  );
};
