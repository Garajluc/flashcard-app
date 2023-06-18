import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { blueGrey, deepOrange, lightGreen } from '@mui/material/colors';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export const theme = createTheme({
  palette: {
    primary: {
      main: '#4e50fc',
    },
    text: {
      primary: '#2e3856',
    },
    background: {
      default: '#f6f7fb',
      paper: '#fff',
    },
    error: {
      light: deepOrange[100],
      main: deepOrange[500],
      dark: deepOrange[800],
    },
    success: {
      light: lightGreen[100],
      main: lightGreen[500],
      dark: lightGreen[800],
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#2e3856',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 700,
      color: '#2e3856',
      '@media (max-width:600px)': {
        fontSize: '1.25rem',
      },
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 700,
      color: '#2e3856',
      '@media (max-width:600px)': {
        fontSize: '1rem',
      },
    },
    h4: {
      fontSize: '1rem',
      fontWeight: 700,
      color: '#2e3856',
      '@media (max-width:600px)': {
        fontSize: '0.75rem',
      },
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      color: '#6b7280',
    },
    body2: {
      fontSize: '0.75rem',
      fontWeight: 700,
      color: '#6b7280',
    },
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
