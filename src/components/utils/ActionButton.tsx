import { forwardRef } from 'react';
import type { ButtonProps } from '@mui/material';
import { Button } from '@mui/material';

interface ActionButtonProps extends ButtonProps {
  label: string;
  startIcon?: React.ReactNode;
}

export const ActionButton = forwardRef(
  ({ label, startIcon, ...rest }: ActionButtonProps, _ref) => {
    return (
      <Button size="small" variant="contained" startIcon={startIcon} {...rest}>
        {label}
      </Button>
    );
  }
);

ActionButton.displayName = 'ActionButton';
