// users table
const bcrypt = require('bcrypt');

module.exports = function(knex) {
  // functions for the database go here

  const registerUserLocal = (regForm) => {
    const regObj = {
      first_name: regForm.first_name,
      email: regForm.email,
      password_digest: bcrypt.hashSync(regForm.password, 10)
    };

    return knex.insert(regObj)
      .into('users')
      .returning(['id', 'first_name', 'email']);
  };

  
  const getUserByEmail = (email) => {
    return knex.select()
      .from('users')
      .where('email', '=', email);
  };

  const getUserById = (id) => {
    return knex.select()
      .from('users')
      .where('id', '=', id);
  };

  // make sure the passwords match
  const comparePassword = (password, password_digest) => {
    return bcrypt.compareSync(password, password_digest);
  };

  return {
    comparePassword,
    getUserByEmail,
    getUserById,
    registerUserLocal
  };
}