import type { ChipProps as MuiChipProps } from '@mui/material';
import { Chip as MuiChip } from '@mui/material';

type ChipProps = MuiChipProps;

export const Chip = (props: ChipProps) => {
  return (
    <MuiChip
      {...props}
      sx={{
        borderRadius: 1,
        borderWidth: 2,
      }}
    />
  );
};
