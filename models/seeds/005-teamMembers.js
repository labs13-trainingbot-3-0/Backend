// const { createFakeTeamMembers } = require("../../helpers/fakeData");
// exports.seed = function(knex, Promise) {
//   return knex("team_members").then(function() {
//     return knex("team_members").insert(createFakeTeamMembers());
//   });
// };

exports.seed = async function(knex, Promise) {
  const team_members = [
    {
      first_name: 'Training',
      last_name: 'Bot',
      email: 'trainingbot3@gmail.com',
      job_description: 'Admin',
      user_id: 1
    },
    {
      first_name: 'Divya',
      last_name: 'Nair',
      email: 'divnairs@gmail.com',
      job_description: 'Tester',
      user_id: 1
    },
    {
      first_name: 'Ben',
      last_name: 'Chandler',
      email: 'benchand@gmail.com',
      job_description: 'Tester',
      user_id: 1
    },
    {
      first_name: 'Tom',
      last_name: 'Folbrecht',
      email: 'tfolbrecht@gmail.com',
      job_description: 'Tester',
      user_id: 1
    },
    {
      first_name: 'Joe',
      last_name: 'Bugajski',
      email: 'yogurtmystery@gmail.com',
      job_description: 'Tester',
      user_id: 1
    }
  ]
  return await knex('team_members').insert(team_members)
}
