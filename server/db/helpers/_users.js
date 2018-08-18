// users table
const bcrypt = require('bcrypt');

module.exports = function(knex, logger) {
  const TABLE_NAME = 'users';
  
  // make sure the passwords match
  const comparePassword = (password, password_digest) => {
    return bcrypt.compareSync(password, password_digest);
  };
  
  const getUserByEmail = email => {
    logger.info(`Checking db for email: ${email}`);

    return knex.select()
    .from(TABLE_NAME)
    .where('email', '=', email);
  };
  
  const getUserById = id => {
    logger.info(`Checking db for user id: ${id}`);
    
    return knex.select(['id', 'email', 'first_name', 'profile_image_url'])
    .from(TABLE_NAME)
    .where('id', '=', id);
  };
  
  const registerUserLocal = regForm => {
    logger.info(`Adding new user: ${regForm.email}`);

    const regObj = {
      first_name: regForm.first_name,
      email: regForm.email,
      password_digest: bcrypt.hashSync(regForm.password, 10)
    };

    return knex.insert(regObj)
      .into(TABLE_NAME)
      .returning(['id', 'first_name', 'email']);
  };

  return {
    comparePassword,
    getUserByEmail,
    getUserById,
    registerUserLocal
  };
}