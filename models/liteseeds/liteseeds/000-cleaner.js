exports.seed = async (knex, Promise) => {
  await knex.raw("UPDATE SQLITE_SEQUENCE SET SEQ=0 WHERE NAME='account_types';");
  await knex.raw("UPDATE SQLITE_SEQUENCE SET SEQ=0 WHERE NAME='messages';");
  await knex.raw("UPDATE SQLITE_SEQUENCE SET SEQ=0 WHERE NAME='notifications';");
  await knex.raw("UPDATE SQLITE_SEQUENCE SET SEQ=0 WHERE NAME='responses';");
  await knex.raw("UPDATE SQLITE_SEQUENCE SET SEQ=0 WHERE NAME='services';");
  await knex.raw("UPDATE SQLITE_SEQUENCE SET SEQ=0 WHERE NAME='team_members';");
  await knex.raw("UPDATE SQLITE_SEQUENCE SET SEQ=0 WHERE NAME='tokens';");
  await knex.raw("UPDATE SQLITE_SEQUENCE SET SEQ=0 WHERE NAME='training_series';");
  await knex.raw("UPDATE SQLITE_SEQUENCE SET SEQ=0 WHERE NAME='users';");

  if (process.env.NODE_ENV == "development"){
    console.log("test")
  }
};