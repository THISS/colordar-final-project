const express = require('express');
const router = express.Router();
const uuid = require('uuid/v4');

module.exports = (db, log) => {
  
  const errorHandler = (error, res) => {
    log.error(error);
    return res.json({error: 'something funky went down'});
  };

  const emailUsers = (email, uurl) => { // TODO: implement this feature
    log.info(`EMAIL -> email: ${email}, uurl: ${uurl}`);
  };
  
  const notifyUsers = (email, uurl) => { // TODO: implement this feature
    log.info(`NOTIFY -> email: ${email}, uurl: ${uurl}`);
  };
  
  router.get('/',(req, res) => {
    const userId = req.user.id;
    const responseObj = {};
    
    db.groups.getAllGroups(userId)
      .then(queryResponse => {
        responseObj.groups = queryResponse;
        return res.json(responseObj);
      })
      .catch(error => {
        errorHandler(error, res);
      });
  });

  router.post('/', (req, res) => {
    const userId = req.user.id;
    const responseObj = {};

    const groupInput =  req.body;
    groupInput.owner_id = userId;

    db.groups.addGroup(groupInput)
      .then(queryResponse => {
        // queryResponse is Promise.all where [0] is group and [1] is calendar for group
        responseObj.groups = queryResponse[0];
        return Promise.all([
          db.groups.linkUser(
            userId,
            queryResponse[0][0].id
          ),
          db.groups.linkCalendar(
            queryResponse[0][0].id,// new group
            queryResponse[1][0].id // new calendar for group
          ),
          db.calendars.linkMaster(
            userId,
            queryResponse[1][0].id
          )
        ]);
      })
      .then(queryResponse => {
        return res.json(responseObj);
      })
      .catch(error => {
        errorHandler(error, res);
      });
  });

  // This is the link that is added to notifications and or sent to a users email address
  // When another user invites them to a group
  // eg.
  // https://colordar.herokuapp.com/api/groups/add-user-to-group?uurl=djfakjdfkajjfkdjfiemfekjdfaekjkefi
  router.get('/add-user-to-group', (req, res) => {
    const uniqueUrl = req.query.uurl;

    db.groups.addUserToGroupByUurl(uniqueUrl)
      .then(queryResponse => {
        return res.json({ success: true })
      })
      .catch(error => {
        errorHandler(error, res);
      });
  });

  router.get('/:id', (req, res) => {
    const groupId = req.params.id;
    const userId = req.user.id;
    const responseObj = {};

    if (!groupId) {
      errorHandler('no groupId given', res);
    }

    db.groups.getGroupById(groupId)
      .then(queryResponse => {

        Object.assign(responseObj, {
          id: queryResponse.id,
          name: queryResponse.name,
          color_id: queryResponse.color_id
        });

        return db.calendars.getCalendarById(queryResponse.calendar_id);
      })
      .then(queryResponse => {
        responseObj.calendar = queryResponse;
        return res.json(responseObj);
      })
      .catch(error => {
        errorHandler(error, res);
      });
  });

  router.get('/:id/withusers', (req, res) => {
    const groupId = req.params.id;
    const userId = req.user.id;
    const responseObj = {};

    if (!groupId) {
      errorHandler('no groupId given', res);
    }

    Promise.all([
      db.groups.getGroupById(groupId),
      db.groups.getUsersByGroup(groupId, userId)
    ])
      .then(queryResponse => {

        Object.assign(responseObj, {
          id: queryResponse[0].id,
          name: queryResponse[0].name,
          color_id: queryResponse[0].color_id,
          users: queryResponse[1]
        });

        return db.calendars.getCalendarById(queryResponse[0].calendar_id);
      })
      .then(queryResponse => {
        responseObj.calendar = queryResponse;
        return res.json(responseObj);
      })
      .catch(error => {
        errorHandler(error, res);
      });
  });

  router.put('/:id/edit', (req, res) => {
    const groupId = req.params.id;
    const groupInput = req.body;

    db.groups.updateGroup(groupId, groupInput)
      .then(queryResponse => {
        return res.json(queryResponse);
      })
      .catch(error => {
        errorHandler(error, res);
      });
  });

  router.put('/:id/addemails', (req, res) => {
    const userId = req.user.id;
    const groupId = req.params.id;
    const emailsInput = req.body.emails;

    // TODO: Validate the emails provided

    const addUsersToGroup = emailsInput.map(email => ({
        inviter_id: userId,
        group_id: groupId,
        added_user_email: email,
        uurl: uuid(),
        token_used: false
    }));

    db.groups.requestUsersToJoin(addUsersToGroup)
      .then(queryResponse => {
        for (let i = 0; i < queryResponse.length; i++) {
          emailUsers(queryResponse[i].added_user_email, queryResponse[i].uurl);
          notifyUsers(queryResponse[i].added_user_email, queryResponse[i].uurl);
        }

        return res.json({success: true});
      })
      .catch(error => {
        errorHandler(error, res);
      });
  });

  return router;
}