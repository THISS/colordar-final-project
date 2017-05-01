import { EVENT_SELECTED, ADD_EVENT } from './action_types.js';

// Create the action controller which returns the ACTION within the function
export const selectEvent = (event) => {
  console.log("You clicked on event:", event.title);
  return {
    type: EVENT_SELECTED,
    payload: event
  }
};

//REALLY DIRTY

var next_id = 1234;

export const addEvent = (title, start, end) => ({
  type: ADD_EVENT,
  payload: {
    id: next_id++,
    title,
    start,
    end
  }
});
