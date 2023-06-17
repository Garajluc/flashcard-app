import { forwardRef } from 'react';
import type { ButtonProps } from '@mui/material';
import { Button } from '@mui/material';

interface ActionButtonProps extends ButtonProps {
  label: string;
  variant?: ButtonProps['variant'];
  startIcon?: React.ReactNode;
}

export const ActionButton = forwardRef(
  (
    { label, startIcon, variant = 'contained', ...rest }: ActionButtonProps,
    _ref
  ) => {
    return (
      <Button size="small" variant={variant} startIcon={startIcon} {...rest}>
        {label}
      </Button>
    );
  }
);

ActionButton.displayName = 'ActionButton';
