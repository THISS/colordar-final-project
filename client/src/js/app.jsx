// React imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// import socket from './utilities/sockets';
import store from './store';
// Our component imports
import App from './components/App.jsx';

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>
  , document.querySelector('#react-root'));
