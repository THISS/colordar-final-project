// returns a function of route middleware to indicate whether user is logged in or not
module.exports = function isLoggedIn(logger) {
  return (req, res, next) => {
    // if user is authenticated in the session, carry on
    logger.info("authenticated: ", req.isAuthenticated());

    if (req.isAuthenticated()) {
      res.locals.loggedIn = true;
    } else {
      // if they aren't redirect them to the home page
      res.locals.loggedIn = false;
      res.json(res.locals);
      return;
    }
    return next();
  };
};
