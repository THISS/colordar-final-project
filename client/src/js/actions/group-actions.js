import {
  getMyGroupsAjax,
  getGroupByIdAjax,
  getGroupByIdWithUsersAjax,
  addUserToGroupAjax,
  addUsersByEmailAjax,
  addGroupAjax,
  updateGroupAjax
} from '../ajax/groups-ajax';

// Constants
export const GET_MY_GROUPS = 'GET_MY_GROUPS';
export const GET_GROUP_BY_ID = 'GET_GROUP_BY_ID';
export const GET_GROUP_BY_ID_WITH_USERS = 'GET_GROUP_BY_ID_WITH_USERS';
export const ADD_ME_TO_GROUP = 'ADD_ME_TO_GROUP';
export const ADD_USERS_BY_EMAIL = 'ADD_USERS_BY_EMAIL';
export const POST_GROUP = 'POST_GROUP';
export const UPDATE_GROUP = 'UPDATE_GROUP';

// create Action controllers
export const reqGetMyGroups = () => {
  return {
    type: GET_MY_GROUPS,
    payload: getMyGroupsAjax()
  }
}

export const reqGetGroupById = (groupId) => {
  return {
    type: GET_GROUP_BY_ID,
    payload: getGroupByIdAjax(groupId)
  }
}

export const reqGetGroupByIdWithUsers = (groupId) => {
  return {
    type: GET_GROUP_BY_ID_WITH_USERS,
    payload: getGroupByIdWithUsersAjax(groupId)
  }
}

export const reqAddUserToGroup = (uurl) => {
  return {
    type: ADD_ME_TO_GROUP,
    payload: addUserToGroupAjax(uurl)
  }
}

export const reqAddUsersByEmail = (groupId, emailArr) => {
  return {
    type: ADD_USERS_BY_EMAIL,
    payload: addUsersByEmailAjax(groupId, emailArr)
  }
}

export const reqAddGroup = (group) => {
  return {
    type: POST_GROUP,
    payload: addGroupAjax(group)
  }
}

export const reqUpdateGroup = (group) => {
  return {
    type: UPDATE_GROUP,
    payload: updateGroupAjax(group)
  }
}