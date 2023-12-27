import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

// Create a theme instance.
export const greenTheme = createTheme({
  palette: {
    primary: {
      main: '#308050',
    },
    secondary: {
      main: '#543884',
    },
    error: {
      main: red.A400,
    },
  },
});

