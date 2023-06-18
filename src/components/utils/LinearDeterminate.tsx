import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

type LinearDeterminateProps = {
  progress: number;
};

export const LinearDeterminate = ({ progress }: LinearDeterminateProps) => {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
};
