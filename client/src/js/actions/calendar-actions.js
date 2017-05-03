import {
  getMyCalendarsAjax,
  getCalendarByIdAjax,
  addCalendarAjax,
  updateCalendarAjax
} from '../ajax/calendars-ajax';

// Constants
export const GET_MY_CALENDARS = 'GET_MY_CALENDARS';
export const GET_CALENDAR_BY_ID = 'GET_CALENDAR_BY_ID';
export const POST_CALENDAR = 'POST_CALENDAR';
export const UPDATE_CALENDAR = 'UPDATE_CALENDAR';

// create Action controllers
export const reqGetMyCalendars = () => {
  return {
    type: GET_MY_CALENDARS,
    payload: getMyCalendarsAjax()
  }
}

export const reqGetCalendarById = (calendarId) => {
  return {
    type: GET_CALENDAR_BY_ID,
    payload: getCalendarByIdAjax(calendarId)
  }
}

export const reqAddCalendar = (calendar) => {
  return {
    type: POST_CALENDAR,
    payload: addCalendarAjax(calendar)
  }
}

export const reqUpdateCalendar = (calendar) => {
  return {
    type: UPDATE_CALENDAR,
    payload: updateCalendarAjax(calendar)
  }
}