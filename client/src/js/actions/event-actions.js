import { 
  getMasterEventsAjax,
  getEventsByCalIdAjax,
  getEventByIdAjax,
  addEventAjax,
  updateEventAjax,
  deleteEventAjax
} from '../ajax/events-ajax';

// Constants
export const EVENT_SELECTED = 'EVENT_SELECTED';
export const EVENT_ADDED = 'EVENT_ADDED';
export const GET_MASTER = 'GET_MASTER';
export const GET_CALENDAR_EVENTS = 'GET_CALENDAR_EVENTS';
export const GET_EVENT_BY_ID = 'GET_EVENT_BY_ID';
export const POST_EVENT = 'POST_EVENT';
export const UPDATE_EVENT = 'UPDATE_EVENT';
export const DELETE_EVENT = 'DELETE_EVENT';

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

/************* Ajax Requests *************/

export const reqGetMasterEvents = () => {
  return {
    type: GET_MASTER,
    payload: getMasterEventsAjax()
  }
}

export const reqGetEventsByCalId = (calendarId) => {
  return {
    type: GET_CALENDAR_EVENTS,
    payload: getEventsByCalIdAjax(calendarId)
  }
}

export const reqGetEventById = (eventId) => {
  return {
    type: GET_EVENT_BY_ID,
    payload: getEventByIdAjax(eventId)
  }
}

export const reqAddEvent = (event) => {
  return {
    type: POST_EVENT,
    payload: addEventAjax(event)
  }
}

export const reqUpdateEvent = (event) => {
  return {
    type: UPDATE_EVENT,
    payload: updateEventAjax(event)
  }
}

export const reqDeleteEvent = (event) => {
  return {
    type: DELETE_EVENT,
    payload: deleteEventAjax(event)
  }
}
