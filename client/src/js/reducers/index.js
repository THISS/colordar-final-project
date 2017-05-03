import { combineReducers } from 'redux';

import EventReducer from './reducer-events';
import CalendarReducer from './reducer-calendars';
import GroupsReducer from './reducer-groups';

const allReducers = combineReducers({
  events: EventReducer,
  calendars: CalendarReducer,
  groups: GroupsReducer
});

export default allReducers;
