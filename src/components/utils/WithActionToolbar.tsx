import type { Theme } from '@mui/material';
import { Grid, useMediaQuery } from '@mui/material';

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
  const matchDownSM = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm')
  );

  return (
    <>
      <Grid
        container
        justifyContent={'space-between'}
        alignItems={'center'}
        spacing={1}
        sx={{ mb: 4 }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ ...(matchDownSM && { '& > *': { width: '100%' } }) }}
        >
          {actionComponentLeft}
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={6}
          justifyContent={'flex-end'}
          sx={{ ...(matchDownSM && { '& > *': { width: '100%' } }) }}
        >
          {actionComponentRight}
        </Grid>
      </Grid>
      {children}
    </>
  );
};
