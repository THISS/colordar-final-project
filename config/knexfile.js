if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host     : process.env.DB_HOST,
      user     : process.env.DB_USER,
      password : process.env.DB_PASSWORD,
      database : process.env.DB_NAME,
      port     : process.env.DB_PORT
    },
     pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './server/db/migrations',
      tableName: 'migrations'
    },
    seeds: {
      directory: './server/db/seeds'
    }
  },
  production: {
    client: 'pg',
    connection: `${process.env.DATABASE_URL}?ssl=true`,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './server/db/migrations',
      tableName: 'migrations'
    },
    seeds: {
      directory: './server/db/seeds'
    }
  }
}