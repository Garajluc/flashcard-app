import { memo } from 'react';
import { Button, Grid, useTheme } from '@mui/material';

type FlipCardActionButtonsProps = {
  handleKnown: () => void;
  handleStillLearning: () => void;
};

export const FlipCardActionButtons = memo(
  ({ handleKnown, handleStillLearning }: FlipCardActionButtonsProps) => {
    const theme = useTheme();

    return (
      <Grid container sx={{ background: theme.palette.background.paper, p: 4 }}>
        <Grid container justifyContent={'space-between'} spacing={1}>
          <Grid item xs={12} sm={6}>
            <Button
              onClick={handleStillLearning}
              variant="outlined"
              color="inherit"
              sx={{ width: '100%' }}
            >
              Still learning
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              onClick={handleKnown}
              variant="outlined"
              color="inherit"
              sx={{ width: '100%' }}
            >
              Know
            </Button>
          </Grid>
        </Grid>
      </Grid>
    );
  }
);

FlipCardActionButtons.displayName = 'FlipCardActionButtons';
