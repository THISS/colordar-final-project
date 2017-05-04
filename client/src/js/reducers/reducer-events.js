import {
  EVENT_ADDED,
  EVENT_SELECTED,
  GET_MASTER,
  GET_CALENDAR_EVENTS,
  GET_EVENT_BY_ID,
  POST_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
  reqAddEvent
} from '../actions/event-actions';

const initialState = {
  events: [],
  selected: null,
  error: null
};

export default function(state=initialState, action) {
  const replace = function(val, index) {
    if (val.id === action.payload.id) {
      return convertForFullCalendar(action.payload);
    }
    return val;
  }

  const convertForFullCalendar = (event) => {
    const colours = { 1: 'deepskyblue', 2: 'seagreen', 3: '#00DB9A', 4: 'crimson', 5: 'yellow' };
    const convertedEvent = {
      title: event.name,
      calendar_id: event.calendar_id,
      start: event.start_time,
      end: event.end_time,
      color: colours[event.color_id],
      location: event.location,
      id: event.id
    };

    return convertedEvent;
  }

  switch(action.type) {
    case EVENT_SELECTED:
      return {
        ...state,
        selected: action.payload
      };
      break;
    case GET_MASTER:
      return {
        ...state,
        events: action.payload.events.map(convertForFullCalendar)
      };
    case GET_CALENDAR_EVENTS:
      return {
        ...state,
        events: action.payload.events.map(convertForFullCalendar)
      };
    case GET_EVENT_BY_ID:
      return {
        ...state,
        selected: action.payload
      };
    case EVENT_ADDED:
    case POST_EVENT:
      return {
        ...state,
        events: state.events.concat(convertForFullCalendar(action.payload))
      };
    case UPDATE_EVENT:
      return {
        ...state,
        events: state.events.map(replace)
      };
    case DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter((val) => !(val.id === action.payload.id))
      };
    default:
      return state;
  }
}
