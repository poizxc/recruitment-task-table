import React from 'react';
import ReactDOM from 'react-dom';
import App from 'Containers/App/App';
import * as serviceWorker from 'serviceWorker';
import { Normalize } from 'styled-normalize';
import GlobalStyles from 'GlobalStyles'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Normalize />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
