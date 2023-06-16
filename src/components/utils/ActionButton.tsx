import { forwardRef } from 'react';
import { Button } from '@mui/material';

type ActionButtonProps = {
  label: string;
  startIcon?: React.ReactNode;
};

export const ActionButton = forwardRef(
  ({ label, startIcon }: ActionButtonProps, _ref) => {
    return (
      <Button size="small" variant="contained" startIcon={startIcon}>
        {label}
      </Button>
    );
  }
);

ActionButton.displayName = 'ActionButton';
