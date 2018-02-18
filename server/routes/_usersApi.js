const express = require('express');
const router = express.Router();

module.exports = function(db, passport, log, loggedInMiddleware) {

  const errorHandler = (error, res) => {
    log.error(error);
    res.json({error: 'something funky went down'});
  };

  router.get('/',(req, res) => {
    res.render('index');
  });

  // Register
  router.post('/', (req, res, next) => {
    passport.authenticate('local-signup', function(err, user, info) {
      if (err) { 
        return next(err); 
      }
      if (!user) {
        res.locals.loggedIn = false;
        res.locals.message = req.flash('signupMessage');
        return res.status(401).json(res.locals); 
      }

      req.logIn(user, function(err) {
        if (err) {
          return next(err); 
        }
        res.locals.loggedIn = true;
        return res.json(res.locals);
      });

    })(req, res, next);

  });

  // Login
  router.put('/login', (req, res, next) => {
    // req.body = {
    //   email: 'brenton@mildmovies.com',
    //   password: 'Brentonpass'
    // };

    passport.authenticate('local-login', function(err, user, info) {
      if (err) { 
        return next(err); 
      }
      if (!user) {
        res.locals.loggedIn = false;
        res.locals.message = req.flash('loginMessage');
        return res.status(401).json(res.locals); 
      }

      req.logIn(user, function(err) {
        if (err) {
          return next(err); 
        }
        res.locals.loggedIn = true;
        return res.json(res.locals);
      });

    })(req, res, next);

  });
  // Logout
  router.put('/logout', (req, res) => {
    req.logOut();
    res.locals.loggedIn = false;
    res.json(res.locals);
  });

  router.get('/profile', loggedInMiddleware, (req, res) => {
    // return the user object
    const user = req.user[0];
    res.locals.user = {
      email: user.email,
      first_name: user.first_name,
      profile_image_url: user.profile_image_url
    };
    res.json(res.locals);
  });

  // TODO: facebook login

  // TODO: facebook callback

  // TODO: google login

  // TODO: google callback

  return router;
}