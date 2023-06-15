import { Button } from '@mui/material';

type ActionButtonProps = {
  label: string;
  startIcon?: React.ReactNode;
};

export const ActionButton = ({ label, startIcon }: ActionButtonProps) => {
  return (
    <Button size="small" variant="contained" startIcon={startIcon}>
      {label}
    </Button>
  );
};
