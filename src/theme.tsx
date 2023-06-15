import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export const theme = createTheme({
  palette: {},
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          borderBottom: `1px solid ${blueGrey[50]}`,
        },
      },
    },
  },
});
