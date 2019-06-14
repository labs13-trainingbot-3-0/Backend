// const { createFakeTrainingSeries } = require("../../helpers/fakeData");
// exports.seed = function(knex, Promise) {
//   return knex("training_series").then(function() {
//     return knex("training_series").insert(createFakeTrainingSeries());
//   });
// };

exports.seed = async function(knex, Promise) {
  const training_series = [
    {
      user_id: 1,
      title: `Training Bot's training series`
    },
    {
      user_id: 2,
      title: `Divya's training series`
    },
    {
      user_id: 3,
      title: `Ben's training series`
    },
    {
      user_id: 4,
      title: `Tom's training series`
    },
    {
      user_id: 5,
      title: `Joe's training series`
    }
  ]
  return await knex('training_series').insert(training_series)
}