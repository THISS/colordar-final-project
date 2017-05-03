import $ from 'jquery';

// What our calendar object looks like
// {
//   id: 2,
//   name: 'Yard Work',
//   color_id: 3,
//   owner_id: 2
// }

const hostAddress = 'http://localhost:8080/api/calendars';

export const getMyCalendarsAjax = () => {
  return $.ajax(`${ hostAddress }`, {
    method: 'get'
  });
};

export const getCalendarByIdAjax = (calendarId) => {
  return $.ajax(`${ hostAddress }/${calendarId}`, {
    method: 'get'
  });
};

export const addCalendarAjax = (calendar) => {
  return $.ajax(`${ hostAddress }`, {
    method: 'post',
    data: calendar
  });
};

export const updateCalendarAjax = (calendar) => {
  return $.ajax(`${ hostAddress }/${calendar.id}/edit`, {
    method: 'put',
    data: calendar
  });
};