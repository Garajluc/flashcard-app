import { Stack } from '@mui/material';

type WithAppBarProps = {
  children: React.ReactNode;
  appBarComponent: React.ReactNode;
};

export const WithCustomAppBar = ({
  children,
  appBarComponent,
}: WithAppBarProps) => {
  return (
    <>
      {appBarComponent}
      <Stack
        sx={{
          maxWidth: '75vw',
          margin: 'auto',
          py: 5,
        }}
      >
        {children}
      </Stack>
    </>
  );
};
