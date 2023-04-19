//External deps
import React, { useEffect } from "react";
import {
  createTheme,
  StyledEngineProvider,
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
} from '@mui/material/styles';
import { blue, deepOrange } from '@mui/material/colors';

//Internal deps
import Auth from "../../pages/Auth";

//Local deps
import './App.scss';

function App() {
  useEffect(() => {
    document.title = 'react-form';
  }, []);
  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        light: '#0059B2',
        main: blue[800],
        dark: '#0059B2',
        contrastText: '#fff',
      },
      background: {
        default: '#0A1929',
        paper: '#1D2332',
      },
      secondary: {
        main: '#242838',
      },
      error: {
        main: '#E71C59'
      },
      warning: {
        main: deepOrange[900],
      },
      text: {
        main: '#ffffff',
      }
    },
  });

  return (
    <StyledEngineProvider injectFirst>
      <CssVarsProvider theme={extendTheme(theme)}>
        <Auth />
      </CssVarsProvider>
    </StyledEngineProvider>
  );
}

export default App;
