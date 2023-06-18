import type { Theme } from '@mui/material';

export const BottomBorderActionStyle = (theme: Theme) => ({
  borderBottom: `4px solid ${theme.palette.background.paper}`,
  '&:hover': {
    borderColor: theme.palette.primary.light,
  },
});
