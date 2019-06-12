require("dotenv").config();

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './models/dev.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './models/migrations/'
    },
    seeds: {
      directory: './models/localseeds/'
    }
},
  production: {
    client: "postgresql",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./models/migrations/"
    },
    seeds: {
      directory: "./models/seeds/"
    },
    useNullAsDefault: true
  }
};
