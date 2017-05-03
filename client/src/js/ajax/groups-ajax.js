import $ from 'jquery';

// What our calendar object looks like
// {
//   id: 2,
//   name: 'Yard Work',
//   color_id: 3,
//   owner_id: 2
// }

const hostAddress = 'http://localhost:8080/api/groups';

export const getMyGroupsAjax = () => {
  return $.ajax(`${ hostAddress }`, {
    method: 'get'
  });
};

export const getGroupByIdAjax = (groupId) => {
  return $.ajax(`${ hostAddress }/${groupId}`, {
    method: 'get'
  });
};

export const getGroupByIdWithUsersAjax = (groupId) => {
  return $.ajax(`${ hostAddress }/${groupId}/withusers`, {
    method: 'get'
  });
};

export const addUserToGroupAjax = (uurl) => {
  return $.ajax(`${ hostAddress }?uurl=${uurl}`, {
    method: 'get'
  });
};

export const addUsersByEmailAjax = (groupId, emailsArr) => {
  return $.ajax(`${ hostAddress }/${ groupId }/addemails`, {
    method: 'put',
    data: { emails: emailsArr }
  });
};

export const addGroupAjax = (group) => {
  return $.ajax(`${ hostAddress }`, {
    method: 'post',
    data: group
  });
};

export const updateGroupAjax = (group) => {
  return $.ajax(`${ hostAddress }/${group.id}/edit`, {
    method: 'put',
    data: group
  });
};