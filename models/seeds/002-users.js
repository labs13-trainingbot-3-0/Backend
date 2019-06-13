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
    },
    {
      name: 'Divya Nair',
      email: 'divnairs@gmail.com',
    },
    {
      name: 'Ben Chandler',
      email: 'benchand@gmail.com',
    },
    {
      name: 'Tom Folbrecht',
      email: 'tfolbrecht@gmail.com',
    },
    {
      name: 'Joe Bugajski',
      email: 'yogurtmystery@gmail.com',
    }
  ]
  return await knex('users').insert(users)
}