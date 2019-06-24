// const { createFakeUsers } = require("../../helpers/fakeData");
// exports.seed = function(knex, Promise) {
//   return knex("users").then(function() {
//     return knex("users").insert(createFakeUsers());
//   });
// };

exports.seed = async function(knex, Promise) {
  const users = [
    {
      name: 'training bot',
      email: 'trainingbot3@gmail.com',
      notifications_sent: 0,
      account_type_id: 1
    },
    {
      name: 'Divya Nair',
      email: 'divnairs@gmail.com',
      notifications_sent: 0,
      account_type_id: 1
    },
    {
      name: 'Ben Chandler',
      email: 'benchand@gmail.com',
      notifications_sent: 0,
      account_type_id: 1
    },
    {
      name: 'Tom Folbrecht',
      email: 'tfolbrecht@gmail.com',
      notifications_sent: 0,
      account_type_id: 1
    },
    {
      name: 'Joe Bugajski',
      email: 'yogurtmystery@gmail.com',
      notifications_sent: 0,
      account_type_id: 1
    }
  ]
  return await knex('users').insert(users)
}