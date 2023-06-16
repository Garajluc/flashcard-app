import { useCallback } from 'react';
import { Card, CardContent, Stack, Typography } from '@mui/material';
import { ErrorBoundary } from 'react-error-boundary';
import RefreshIcon from '@mui/icons-material/Refresh';
import { ActionButton } from './ActionButton';

const Fallback = () => {
  const refreshPage = useCallback(() => {
    window.location.reload();
  }, []);

  return (
    <Card>
      <CardContent>
        <Stack spacing={2} justifyContent="center" alignItems="center">
          <Typography variant="h1" align="center">
            This component has failed to render
          </Typography>
          <Typography align="center" onClick={refreshPage}>
            <p>We&apos;re sorry for the inconvenience!</p>
            <p>You can try to:</p>
            <ActionButton
              label="Refresh Page"
              startIcon={<RefreshIcon fontSize="small" />}
              onClick={refreshPage}
            />
            <br />
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

interface Props {
  children: React.ReactNode;
}

export const ErrorBoundaryWithFallback = ({ children }: Props) => (
  <ErrorBoundary fallback={<Fallback />}>{children}</ErrorBoundary>
);
