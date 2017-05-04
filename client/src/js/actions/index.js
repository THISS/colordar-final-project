// Import All Actions
import * as events from './event-actions';
import * as groups from './group-actions';
import * as calendars from './calendar-actions';
import * as users from './user-actions';

export default {
  events,
  groups,
  calendars,
  users
}

// Create the action controller which returns the ACTION within the function
export const selectEvent = (event) => {
  return {
    type: events.SELECT_EVENT,
    payload: event
  }
};

export const addEvent = (title, start, end) => ({
  type: events.POST_EVENT,
  payload: {
    name: title,
    start_time: start,
    end_time: end,
    color_id: 3
  }
});
