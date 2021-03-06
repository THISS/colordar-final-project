
const LocalStrategy = require('passport-local').Strategy;
const SIGNUPMESSAGE = 'signupMessage';
const LOGINMESSAGE = 'loginMessage';
const BADLOGINMESSAGE = 'Either the email or password are incorrect';
const BADSIGNUPMESSAGE = 'We are struggling to process this request, \
you may want to check the password or if you already have an account';

module.exports = function(passport, dbHelpers, log) {

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    dbHelpers.users.getUserById(id)
      .then((user) => {
        done(null, user);
      })
      .catch((err) => {
        log.error(err);
        done(err);
      });
  });

  // Local Signup
  passport.use('local-signup', new LocalStrategy({
      // by default local strat uses username and password, we have email
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true // allows us to give the request object which may come in handy
    },
    function(req, email, password, done) {
      // passwords must match
      const { password_confirmation, first_name } = req.body;

      if (password_confirmation !== password) {
        return done(null, false, req.flash(SIGNUPMESSAGE, BADSIGNUPMESSAGE));
      }
      // email should not already exist
      dbHelpers.users.getUserByEmail(email)
        .then((user) => {
          if (user.length > 0) {
            return done(null, false, req.flash(SIGNUPMESSAGE, BADSIGNUPMESSAGE));
          }
          // other wise we need to create this user
          return dbHelpers.users.registerUserLocal({
            first_name,
            email,
            password
          });
        })
        .then((addedSuccessfully) => {
          if (addedSuccessfully) {
            return done(null, addedSuccessfully[0]);
          }
        })
        .catch((err) => {
          return done(err);
        });
    }
  ));

  // Local Login
  passport.use('local-login', new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true
    },
    function(req, email, password, done) {
      dbHelpers.users.getUserByEmail(email)
        .then((userResponse) => {
          if (userResponse.length < 1) {
            return done(null, false, req.flash(LOGINMESSAGE, BADLOGINMESSAGE));
          }
          if (!dbHelpers.users.comparePassword(password, userResponse[0].password_digest)) {
            return done(null, false, req.flash(LOGINMESSAGE, BADLOGINMESSAGE));
          }
          // Return our user
          return done(null, userResponse[0]);
        })
        .catch((err) => {
          log.error(err);
          return done(err);
        });
    }
  ));
}