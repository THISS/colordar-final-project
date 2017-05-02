// React imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Redux imports
import promise from 'redux-promise';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import allReducers from './reducers';

// Socket io imports
import io from 'socket.io-client';

// Our component imports
import App from './components/App.jsx';
import FakeData from '../data/fake-data.json';

const store = createStore(allReducers, applyMiddleware(promise, logger));

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>
  , document.getElementById('react-root'));

// Sockets ---- joy
const socket = io.connect('http://localhost:8080');
socket.on('outgoingtype', (data) => {
  console.log(data);
});
socket.emit('incomingtype', {client: 'to server'});
