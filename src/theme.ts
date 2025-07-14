import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1800,
    },
  },
  palette: {
    background: {
      default: '#020207',
      paper: '#111426',
    },
    primary: {
      main: '#1976ff',
      contrastText: '#fff',
    },
    secondary: {
      main: '#00eaff',
      contrastText: '#fff',
    },
    text: {
      primary: '#F1F6FF',
      secondary: '#A4AFC8',
      disabled: '#A4AFC8',
    },
  },
  typography: {
    fontFamily: '"Rubik", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 400,
      lineHeight: 1.167,
      letterSpacing: '-0.01562em',
      '@media (min-width: 900px)': {
        fontSize: 92,
      },
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 300,
      lineHeight: 1.2,
      letterSpacing: '-0.00833em',
      '@media (min-width: 900px)': {
        fontSize: 68,
      },
    },
    h3: {
      fontSize: '2.5rem',
      fontWeight: 400,
      lineHeight: 1.167,
      letterSpacing: '0em',
      '@media (min-width: 900px)': {
        fontSize: 50,
      },
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 400,
      lineHeight: 1.235,
      letterSpacing: '0.00735em',
      '@media (min-width: 900px)': {
        fontSize: 23,
      },
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 400,
      lineHeight: 1.334,
      letterSpacing: '0em',
      '@media (min-width: 900px)': {
        fontSize: 30,
      },
    },
    h6: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.6,
      letterSpacing: '0.0075em',
      '@media (min-width: 900px)': {
        fontSize: '1rem',
      },
    },

    subtitle1: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.75,
      letterSpacing: '0.00938em',
    },
    subtitle2: {
      fontSize: '0.75rem',
      fontWeight: 500,
      lineHeight: 1.57,
      letterSpacing: '0.00714em',
    },

    body1: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0.00938em',
    },
    body2: {
      fontSize: '0.625rem',
      fontWeight: 400,
      lineHeight: 1.43,
      letterSpacing: '0.01071em',
    },

    button: {
      fontSize: 18,
      fontWeight: 400,
      lineHeight: 1.75,
      letterSpacing: '0.02857em',
      textTransform: 'uppercase',
      '@media (min-width: 900px)': {
        fontSize: 18,
      },
    },
    caption: {
      fontSize: '0.625rem',
      fontWeight: 400,
      lineHeight: 1.66,
      letterSpacing: '0.03333em',
      '@media (min-width: 900px)': {
        fontSize: '0.75rem',
      },
    },
    overline: {
      fontSize: '0.625rem',
      fontWeight: 400,
      lineHeight: 2.66,
      letterSpacing: '0.08333em',
      textTransform: 'uppercase',
      '@media (min-width: 900px)': {
        fontSize: '0.75rem',
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#fff',
          backgroundColor: '#1F53FF',
          borderRadius: 7,
          padding: '8px 40px',
          background: 'linear-gradient(90.59deg, #082071 -16.36%, #0E3DD7 51%, #082071 106.76%)',
          border: '1px solid #1F53FF',
          whiteSpace: 'nowrap',
          '&.Mui-disabled, &[disabled]': {
            color: '#bdbdbd',
            background: 'linear-gradient(90.59deg, #22243a -16.36%, #22243a 51%, #22243a 106.76%)',
            border: '1px solid #22243a',
            opacity: 0.7,
            cursor: 'not-allowed',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontSize: 16,
          fontWeight: 500,
          color: '#fff',
          textDecoration: 'none',
          transition: 'color 0.2s, text-decoration 0.2s',
          '&:hover': {
            color: '#1F53FF',
            textDecoration: 'underline',
          },
        },
      },
    },
  },
});

export default theme;
