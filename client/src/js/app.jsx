// React imports
import React from 'react';
import ReactDOM from 'react-dom';

// Redux imports
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers';

// Our component imports
import App from './components/App.jsx';
import FakeData from '../data/fake-data.json';

const store = createStore(allReducers);

// ReactDOM.render(<App data={FakeData}/>, document.getElementById('react-root'));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('react-root'));
