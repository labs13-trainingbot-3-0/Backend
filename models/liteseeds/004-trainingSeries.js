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
      title: `Training Bot's training series`,
      image: `https://res.cloudinary.com/trainingbot3/image/upload/v1560977005/stock%20business/173864062_g77yfh.jpg`
    },
    {
      user_id: 2,
      title: `Divya's training series`,
      image: `https://res.cloudinary.com/trainingbot3/image/upload/v1560976963/stock%20business/iStock-Unfinished-Business-1_klcs1y.jpg`
    },
    {
      user_id: 3,
      title: `Ben's training series`,
      image: `https://res.cloudinary.com/trainingbot3/image/upload/v1560976944/stock%20business/having-a-positive-attitude-is-rewarding-picture-id588266018_lmcqrq.jpg`
    },
    {
      user_id: 4,
      title: `Tom's training series`,
      image: `https://res.cloudinary.com/trainingbot3/image/upload/v1560976975/stock%20business/slide_407618_5105734_free_fdyapb.jpg`
    },
    {
      user_id: 5,
      title: `Joe's training series`,
      image: `https://res.cloudinary.com/trainingbot3/image/upload/v1560976938/stock%20business/iStock-Unfinished-Business-10_xodprl.jpg`
    }
  ]
  return await knex('training_series').insert(training_series)
}