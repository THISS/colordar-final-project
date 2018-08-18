const express = require("express");
const router = express.Router();

module.exports = (db, passport, log, loggedInMiddleware) => {
  const errorHandler = (error, res) => {
    log.error(error);
    return res.json({ error: "something funky went down" });
  };

  // Register
  router.post("/", (req, res, next) => {
    passport.authenticate("local-signup", (err, user, info) => {
      if (err) {
        return next(err);
      }

      if (!user) {
        res.locals.loggedIn = false;
        res.locals.message = info.message;
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
  router.put("/login", (req, res, next) => {

    passport.authenticate("local-login", (err, user, info) => {
      if (err) {
        return next(err);
      }

      if (!user) {
        res.locals.loggedIn = false;
        res.locals.message = info.message;
        return res.status(401).json(res.locals);
      }

      req.logIn(user, err => {
        if (err) {
          return next(err);
        }

        const { id, ...restOfUser } = user;
        res.locals.loggedIn = true;
        res.locals.user = restOfUser;
        return res.json(res.locals);
      });
    })(req, res, next);
  });

  // Logout
  router.put("/logout", (req, res) => {
    req.logOut();
    res.locals.loggedIn = false;
    return res.json(res.locals);
  });

  router.get("/profile", loggedInMiddleware, (req, res) => {
    // return the user object
    db.getUserById(req.user.id)
      .then(user => {
        log.info(`user keys ${Object.keys(user)}`);
        res.locals.user = {
          email: user.email,
          first_name: user.first_name,
          profile_image_url: user.profile_image_url
        };

        return res.json(res.locals);
      })
      .catch(err => {
        log.error(err);
        done(err);
      });
  });

  // TODO: facebook login

  // TODO: facebook callback

  // TODO: google login

  // TODO: google callback

  return router;
};
