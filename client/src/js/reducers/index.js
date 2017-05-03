import { combineReducers } from 'redux';

import EventReducer from './reducer-events';
import CurrentDate from './currentDate';
import CalendarReducer from './reducer-calendars';
import GroupsReducer from './reducer-groups';

const allReducers = combineReducers({
  events: EventReducer,
  currentDate: CurrentDate,
  calendars: CalendarReducer,
  groups: GroupsReducer
});

export default allReducers;
