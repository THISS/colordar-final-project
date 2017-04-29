import { combineReducers } from 'redux';
import EventReducer from './reducer-events';

const allReducers = combineReducers({
  events: EventReducer
});

export default allReducers;
