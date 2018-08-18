const LocalStrategy = require("passport-local").Strategy;
const SIGNUPMESSAGE = "signupMessage";
const LOGINMESSAGE = "loginMessage";
const BADLOGINMESSAGE = "Either the email or password are incorrect";
const BADSIGNUPMESSAGE = "We are struggling to process this request";

module.exports = (passport, dbHelpers, log) => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    done(null, { id }); // don't get the user every time we hit the server
  });

  // Local Signup
  passport.use(
    "local-signup",
    new LocalStrategy(
      {
        // by default local strat uses username and password, we have email
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true // allows us to give the request object which may come in handy
      },
      (req, email, password, done) => {
        // passwords must match
        const { password_confirmation, first_name } = req.body;

        if (password_confirmation !== password) {
          return done(null, false, BADSIGNUPMESSAGE);
        }
        // email should not already exist
        dbHelpers.users
          .getUserByEmail(email)
          .then(user => {
            if (user.id) {
              return done(null, false, BADSIGNUPMESSAGE);
            }
            // otherwise we need to create this user
            return dbHelpers.users.registerUserLocal({
              first_name,
              email,
              password
            });
          })
          .then(addedSuccessfully => {
            if (addedSuccessfully) {
              return done(null, addedSuccessfully[0]);
            }
          })
          .catch(err => {
            return done(err);
          });
      }
    )
  );

  // Local Login
  passport.use(
    "local-login",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true
      },
      (req, email, password, done) => {
        dbHelpers.users
          .getUserByEmail(email)
          .then(userResponse => {
            if (!userResponse.id) {
              return done(null, false, BADLOGINMESSAGE);
            }
            // Stripping the password from the user object
            const { password_digest, ...user} = userResponse;
            if (
              !dbHelpers.users.comparePassword(
                password,
                password_digest
              )
            ) {
              return done(null, false, BADLOGINMESSAGE);
            }
            // Return our user minus the password
            return done(null, user);
          })
          .catch(err => {
            log.error(err);
            return done(err);
          });
      }
    )
  );
};
