// Redux imports
import promise from 'redux-promise';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

// reducers
import allReducers from './reducers';

export default createStore(allReducers, applyMiddleware(promise, logger));