// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2E8B57', // Emerald Green
      contrastText: '#fff',
    },
    secondary: {
      main: '#FFD700', // Gold
      contrastText: '#000',
    },
    background: {
      default: '#2F4F4F', // Slate Gray - dark shade for background
      paper: '#394B4B',   // Slightly lighter for cards/panels
    },
    text: {
      primary: '#E0E0E0',
      secondary: '#B0B0B0',
    },
    info: {
      main: '#D35400', // Optional Burnt Orange for info or warnings
    }
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default theme;
