import React from 'react';
import './App.css';
import TermOfUse from './components/TermOfUse/TermOfUse';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MainPage from './pages/MainPage/MainPage';

const theme = createTheme({
  palette: {
    primary: {
      light: '#4dabf5',
      main: '#2196f3',
      dark: '#1769aa',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#fff',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainPage/>
    </ThemeProvider>
  );
}

export default App;
