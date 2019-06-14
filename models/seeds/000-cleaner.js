exports.seed = function(knex, Promise) {
  return knex.schema.raw(
    "TRUNCATE account_types, users, training_series, team_members, services, tokens, messages, notifications, responses RESTART IDENTITY;"
  );
};

// if sqlite, use different cleaner, make sure to batch seeds to not overwhelm the sqlite connector