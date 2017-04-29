// React imports
import React from 'react';
import ReactDOM from 'react-dom';

// Redux imports
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers';

// Our component imports
import App from './components/App.jsx';
import FakeData from '../data/fake-data.json';

// Custom logger middleware (for applyMiddleware)
// Logs the action that was dispatched and the state (store) before and after the dispatch. Used for debugging.
// Later, put it in it's own module, and only do it in dev env (if statement?)
function logger({ getState }) {
  return (next) => (action) => {
    console.log('will dispatch', action)

    // Call the next dispatch method in the middleware chain.
    let returnValue = next(action)

    console.log('state after dispatch', getState())

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue
  }
}

const store = createStore(allReducers, applyMiddleware(logger));

// ReactDOM.render(<App data={FakeData}/>, document.getElementById('react-root'));

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>
  , document.getElementById('react-root'));
