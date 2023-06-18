import { Grid } from '@mui/material';

type WithActionToolbarProps = {
  children: React.ReactNode;
  actionComponentLeft?: React.ReactNode;
  actionComponentRight?: React.ReactNode;
};

export const WithActionToolbar = ({
  children,
  actionComponentLeft,
  actionComponentRight,
}: WithActionToolbarProps) => {
  return (
    <>
      <Grid
        container
        justifyContent={'space-between'}
        alignItems={'center'}
        sx={{ mb: 4 }}
      >
        <Grid item>{actionComponentLeft}</Grid>
        <Grid item>{actionComponentRight}</Grid>
      </Grid>
      {children}
    </>
  );
};
