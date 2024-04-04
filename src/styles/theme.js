// theme.js
import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#your-primary-color',
    },
    secondary: {
      main: '#your-secondary-color',
    },
    // Customize other colors as needed
  },
  // Customize other theme properties (typography, spacing, etc.) as needed
});

export default darkTheme;