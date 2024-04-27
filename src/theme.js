import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#ff416c', // Set your custom color for all links
          '&:hover': {
            color: '#bf334f', // Optional: Set a darker shade for hover, adjust as needed
            textDecoration: 'underline', // Optional: Add underline on hover
          },
        },
      },
    },
  },
});


export default theme;