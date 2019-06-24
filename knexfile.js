require('dotenv').config()

module.exports = {
  devsqlite: {
    client: "sqlite3",
    connection: {
      filename: "./models/dev.sqlite3"
    },
    migrations: {
      directory: "./models/migrations/" // knex migrate:latest --env=devsqlite
    },
    seeds: {
      directory: "./models/liteseeds/" //  knex seed:run --env=devsqlite
    },
    useNullAsDefault: true
  },
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