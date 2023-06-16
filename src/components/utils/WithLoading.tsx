import { CircularProgress, Stack } from '@mui/material';

type WithLoadingProps = {
  loading: boolean;
  children: React.ReactNode;
};

export const WithLoading = ({ loading, children }: WithLoadingProps) => {
  if (!loading) {
    return children;
  }

  return (
    <Stack justifyContent="center" alignItems="center" sx={{ height: '100%' }}>
      <CircularProgress />
    </Stack>
  );
};
