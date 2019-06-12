require('dotenv').config()

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/tb3', // postgres DB name is tb3,
    migrations: {
      directory: './models/migrations/'
    },
    seeds: {
      directory: './models/seeds/'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './models/migrations/'
    },
    seeds: {
      directory: './models/seeds/'
    }
  }
}