// groups table
module.exports = function(knex) {
const { addCalendar, linkMaster } = require(`${__dirname}/_calendars.js`)(knex);

  // functions for the database go here
  const addGroup = (groupObj) => {
    return Promise.all([
      knex.insert(groupObj, ['id', 'name', 'color_id'])
        .into('groups'),
      addCalendar(groupObj) 
    ]);
  };
  
  const addUserToGroupByUurl = (uurl) => {
    // Get group id and email
    let groupId;

    return knex.first(
      'group_id',
      'added_user_email'
    )
    .from('track_users_groups')
    .where({
      uurl,
      token_used: false
    })
    .then((queryResponse) => {
      if (!queryResponse) {
        return Promise.reject('no available user matches that token');
      }
      groupId = queryResponse.group_id;
      return knex.first(
        'id'
      )
      .from('users')
      .where({email: queryResponse.added_user_email})
    })
    .then((queryResponse) => {
      return linkUser(queryResponse.id, groupId);
    })
    .then((queryResponse) => {
      return updateTracked(uurl);
    })
  };

  const getAllGroups = (userId) => {
    return knex.select(
      'id',
      'name',
      'color_id'
    )
    .from('groups')
    .innerJoin('users_groups', 'users_groups.group_id', '=', 'groups.id')
    .where({user_id: userId});
  };

  const getGroupById = (groupId) => {
    return knex.first(
      'id',
      'name',
      'color_id',
      'calendar_id'
    )
    .from('groups')
    .innerJoin('groups_calendars', 'groups_calendars.group_id', '=', 'groups.id')
    .where({id: groupId});
  };

  const getUsersByGroup = (groupId, userId) => {
    return knex.select(
      'id',
      'first_name'
    )
    .from('users')
    .innerJoin('users_groups', 'users_groups.user_id', '=', 'users.id')
    .where({group_id: groupId})
    .whereNot({user_id: userId});
  };

  const linkCalendar = (groupId, calendarId) => {
    return knex.insert({
      group_id: groupId,
      calendar_id: calendarId
    })
      .into('groups_calendars');
  };

  const linkUser = (userId, groupId) => {
    return knex.insert({
      user_id: userId,
      group_id: groupId
    })
      .into('users_groups');
  };

  const requestUsersToJoin = (usersArr) => {
    return knex.insert(usersArr, ['added_user_email', 'uurl'])
      .into('track_users_groups');
  };

  const updateGroup = (groupId, groupObj) => {
    return knex('groups')
      .update(groupObj)
      .where({id: groupId})
      .returning(['id','name', 'color_id']);
  };

  const updateTracked = (uurl) => {
    // update the token_used
    return knex('track_users_groups').update({
      token_used: true
    })
      .where({uurl});
  };

  return {
    addGroup,
    addUserToGroupByUurl,
    getAllGroups,
    getGroupById,
    getUsersByGroup,
    linkCalendar,
    linkUser,
    requestUsersToJoin,
    updateGroup,
    updateTracked
  };
}