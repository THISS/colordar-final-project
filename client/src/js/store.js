// Redux imports
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

// reducers
import allReducers from './reducers';

export default createStore(allReducers, applyMiddleware(thunk, promiseMiddleware, createLogger));

