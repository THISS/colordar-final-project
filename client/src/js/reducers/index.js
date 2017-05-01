import { combineReducers } from 'redux';
import EventReducer from './reducer-events';
import CurrentDate from './currentDate';

const allReducers = combineReducers({
  events: EventReducer,
  currentDate: CurrentDate
});

export default allReducers;
