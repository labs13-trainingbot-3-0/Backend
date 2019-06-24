require('dotenv').config()

module.exports = {
    development: {
      client: "sqlite3",
      connection: {
        filename: "./models/dev.sqlite3"
      },
      migrations: {
        directory: "./models/migrations/"
      },
      seeds: {
        directory: "./models/liteseeds/"
      },
      useNullAsDefault: true
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