import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

//REDUX
import { Provider } from 'react-redux';
import store from './redux/store';

//UI
import { MuiThemeProvider } from '@material-ui/core';
import theme from './style/theme';

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
