// Constants
export const EVENT_SELECTED = 'EVENT_SELECTED';
export const EVENT_ADDED = 'EVENT_ADDED';

// Create the action controller which returns the ACTION within the function
export const selectEvent = (event) => {
  return {
    type: EVENT_SELECTED,
    payload: event
  }
};

export const addEvent = (event) => {
  return {
    type: EVENT_ADDED,
    payload: event
  }
}
