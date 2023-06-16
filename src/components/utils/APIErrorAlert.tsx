import { Alert, Box } from '@mui/material';
import { getErrorMessages } from '../services/api/ErrorsService';

interface APIErrorAlertProps {
  error?: Error;
}

export const APIErrorAlert = ({ error }: APIErrorAlertProps) => {
  const errors = getErrorMessages(error);
  if (!errors || !errors.length) {
    return null;
  }
  return (
    <Box sx={{ my: 2 }}>
      {errors.map((errorMessage) => (
        <Alert key={errorMessage} severity="error">
          {errorMessage}
        </Alert>
      ))}
    </Box>
  );
};
