import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Routes from './routes/routes';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { ptBR } from '@material-ui/data-grid'

const theme = createMuiTheme(
  {
    palette: {
      primary: {
        light: '#A30601',
        main: '#A30601',
        dark: '#A30601',
        contrastText: '#fff'
      },
      secondary: {
        light: '#065E07',
        main: '#065E07',
        dark: '#065E07',
        contrastText: '#000'
      },
    }
  },
  ptBR
)

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <Routes />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
