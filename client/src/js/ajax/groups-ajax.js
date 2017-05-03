import $ from 'jquery';

// What our calendar object looks like
// {
//   id: 2,
//   name: 'Yard Work',
//   color_id: 3,
//   owner_id: 2
// }

const hostAddress = 'http://localhost:8080/api/groups';

export const getMyGroups = () => {
  return $.ajax(`${ hostAddress }`, {
    method: 'get'
  });
};

export const getGroupById = (groupId) => {
  return $.ajax(`${ hostAddress }/${groupId}`, {
    method: 'get'
  });
};

export const getGroupByIdWithUsers = (groupId) => {
  return $.ajax(`${ hostAddress }/${groupId}/withusers`, {
    method: 'get'
  });
};

export const addUserToGroup = (uurl) => {
  return $.ajax(`${ hostAddress }?uurl=${uurl}`, {
    method: 'get'
  });
};

export const addUsersByEmail = (groupId, emailsArr) => {
  return $.ajax(`${ hostAddress }/${ groupId }/addemails`, {
    method: 'put',
    data: { emails: emailsArr }
  });
};

export const addGroup = (group) => {
  return $.ajax(`${ hostAddress }`, {
    method: 'post',
    data: group
  });
};

export const updateGroup = (group) => {
  return $.ajax(`${ hostAddress }/${group.id}/edit`, {
    method: 'put',
    data: group
  });
};