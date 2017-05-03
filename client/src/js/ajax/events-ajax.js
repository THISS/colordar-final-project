import $ from 'jquery';

// What our event object looks like
// {
//   name: 'darts at mine',
//   location: 'my house',
//   start_time: '2017-04-29T23:07:20.184Z',
//   end_time: '2017-04-29T23:07:20.184Z',
//   calendar_id: 2,
//   color_id: 3
// }

const hostAddress = 'http://localhost:8080/api/events';

export const getApiMaster = () => {
  return $.ajax(`${ hostAddress }?ismaster=true`, {
    method: 'get'
  });
};

export const getEventsByCalId = (calid) => {
  return $.ajax(`${ hostAddress }?calid=${calid}`, {
    method: 'get'
  });
};

export const getEventById = (id) => {
  return $.ajax(`${ hostAddress }/${ id }`, {
    method: 'get'
  });
};

export const addEvent = (event) => {
  return $.ajax(`${ hostAddress }`, {
    data: event,
    method: 'post'
  });
}

export const updateEvent = (event) => {
  return $.ajax(`${hostAddress}/${ event.id }/edit`, {
    data: event,
    method: 'put'
  });
}

export const deleteEvent = (event) => {
  return $.ajax(`${hostAddress}`, {
    method: 'delete',
    data: event
  });
}