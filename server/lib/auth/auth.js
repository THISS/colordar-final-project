// returns a function of route middleware to indicate whether user is logged in or not
module.exports = function isLoggedIn(logger) {
  return (req, res, next) => {
    // if user is authenticated in the session, carry on
    const isAuthenticated = req.isAuthenticated();
    logger.info(`authenticated:  ${isAuthenticated}`);

    if (isAuthenticated) {
      res.locals.loggedIn = true;
      return next();
    } else {
      // if they aren't redirect them to the home page
      res.locals.loggedIn = false;
      return res.json(res.locals);
    }
  };
};
