import $ from 'jquery';

// What our event object looks like
// {
//   name: 'Kiss Kimb',
//   location: 'my house',
//   start_time: '2017-05-03T23:07:20.184Z',
//   end_time: '2017-05-03T23:37:20.184Z',
//   calendar_id: 2,
//   color_id: 3
// }

const hostAddress = 'http://localhost:8080/api/events';

export const getMasterEventsAjax = () => {
  return $.ajax(`${ hostAddress }?ismaster=true`, {
    method: 'get'
  });
};

export const getEventsByCalIdAjax = (calid) => {
  return $.ajax(`${ hostAddress }?calid=${calid}`, {
    method: 'get'
  });
};

export const getEventByIdAjax = (id) => {
  return $.ajax(`${ hostAddress }/${ id }`, {
    method: 'get'
  });
};

export const addEventAjax = (event) => {
  return $.ajax(`${ hostAddress }`, {
    data: event,
    method: 'post'
  });
}

export const updateEventAjax = (event) => {
  return $.ajax(`${hostAddress}/${ event.id }/edit`, {
    data: event,
    method: 'put'
  });
}

export const deleteEventAjax = (event) => {
  return $.ajax(`${hostAddress}`, {
    method: 'delete',
    data: event
  });
}