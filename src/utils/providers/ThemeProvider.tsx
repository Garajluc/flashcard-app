import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { theme } from '@/components/theme/theme';

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
