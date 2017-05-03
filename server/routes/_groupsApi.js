const express = require('express');
const router = express.Router();
const uuid = require('uuid/v4');

module.exports = function(db) {
  
  const errorHandler = (error, res) => {
    console.log(error);
    res.json({error: 'something funky went down'});
  };

  const emailUsers = (email, uurl) => { // TODO: implement this feature
    console.log('email > email', email);
    console.log('email > uurl', uurl);
  };

  const notifyUsers = (email, uurl) => { // TODO: implement this feature
    console.log('notify > email', email);
    console.log('notify > uurl', uurl);
  };
  
  router.get('/',(req, res) => {
    const userId = 1; // TODO: convert
    const responseObj = {};
    
    db.groups.getAllGroups(userId)
      .then((queryResponse) => {
        responseObj.groups = queryResponse;
        res.json(responseObj);
      })
      .catch((error) => {
        errorHandler(error, res);
      });
  });

  router.post('/', (req, res) => {
    const userId = 1; // TODO:
    const responseObj = {};

    const groupInput =  req.body;
    groupInput.owner_id = userId;

    db.groups.addGroup(groupInput)
      .then((queryResponse) => {
        responseObj.groups = queryResponse[0];
        return Promise.all([
          db.groups.linkUser(
            userId,
            queryResponse[0][0].id
          ),
          db.groups.linkCalendar(
            queryResponse[0][0].id,
            queryResponse[1][0].id
          ),
          db.calendars.linkMaster(
            userId,
            queryResponse[1][0].id
          )
        ]);
      })
      .then((queryResponse) => {
        res.json(responseObj);
      })
      .catch((error) => {
        errorHandler(error, res);
      });
  });

  // This is the link that is added to notifications and or sent to a users email address
  // When another user invites them to a group
  // eg.
  // https://colordar.herokuapp.com/api/groups/addusertogroup?uurl=djfakjdfkajjfkdjfiemfekjdfaekjkefi
  router.get('/addusertogroup', (req, res) => {
    const uniqueUrl = req.query.uurl;
    db.groups.addUserToGroupByUurl(uniqueUrl)
      .then((queryResponse) => {
        res.json({success: true})
      })
      .catch((error) => {
        errorHandler(error, res);
      });
  });

  router.get('/:id', (req, res) => {
    const groupId = req.params.id;
    const userId = 1; // TODO: update
    const responseObj = {};

    if (!groupId) {
      errorHandler('no groupId given', res);
    }
    db.groups.getGroupById(groupId)
      .then((queryResponse) => {
        console.log(queryResponse);
        Object.assign(responseObj, {
          id: queryResponse.id,
          name: queryResponse.name,
          color_id: queryResponse.color_id
        });
        return db.calendars.getCalendarById(queryResponse.calendar_id);
      })
      .then((queryResponse) => {
        responseObj.calendar = queryResponse;
        res.json(responseObj);
      })
      .catch((error) => {
        errorHandler(error, res);
      });
  });

  router.get('/:id/withusers', (req, res) => {
    const groupId = req.params.id;
    const userId = 1; // TODO: update
    const responseObj = {};

    if (!groupId) {
      errorHandler('no groupId given', res);
    }
    Promise.all([
      db.groups.getGroupById(groupId),
      db.groups.getUsersByGroup(groupId, userId)
    ])
      .then((queryResponse) => {
        console.log(queryResponse);
        Object.assign(responseObj, {
          id: queryResponse[0].id,
          name: queryResponse[0].name,
          color_id: queryResponse[0].color_id,
          users: queryResponse[1]
        });
        return db.calendars.getCalendarById(queryResponse[0].calendar_id);
      })
      .then((queryResponse) => {
        responseObj.calendar = queryResponse;
        res.json(responseObj);
      })
      .catch((error) => {
        errorHandler(error, res);
      });
  });

  router.put('/:id/edit', (req, res) => {
    const groupId = req.params.id;
    const groupInput = req.body;

    db.groups.updateGroup(groupId, groupInput)
      .then((queryResponse) => {
        res.json(queryResponse);
      })
      .catch((error) => {
        errorHandler(error, res);
      });
  });

  router.put('/:id/addemails', (req, res) => {
    const userId = 1; // TODO:
    const groupId = req.params.id;
    const emailsInput = req.body.emails;

    const addUsersToGroup = emailsInput.map((email) => ({
        inviter_id: userId,
        group_id: groupId,
        added_user_email: email,
        uurl: uuid(),
        token_used: false
    }));

    db.groups.requestUsersToJoin(addUsersToGroup)
      .then((queryResponse) => {
        for (let i = 0; i < queryResponse.length; ++i) {
          emailUsers(queryResponse[i].added_user_email, queryResponse[i].uurl);
          notifyUsers(queryResponse[i].added_user_email, queryResponse[i].uurl);
        }
        res.json({success: true});
      })
      .catch((error) => {
        errorHandler(error, res);
      });
  });

  return router;
}