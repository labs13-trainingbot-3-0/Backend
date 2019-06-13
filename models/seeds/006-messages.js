// const { createFakeMessages } = require("../../helpers/fakeData");
// exports.seed = function(knex, Promise) {
//   return knex("messages").then(function() {
//     return knex("messages").insert(createFakeMessages());
//   });
// };

exports.seed = async function(knex, Promise) {
  const messages = [
    {
      subject: 'Welcome, Training Bot!',
      body: `Hi, I'm your Training Bot! I'll help you onboard.`,
      link: `https://trainingbot3.netlify.com/`,
      training_series_id: 5,
      days_from_start: 1
    },
    {
      subject: 'Welcome, Divya!',
      body: `Hi, I'm your Training Bot! I'll help you onboard.`,
      link: `https://trainingbot3.netlify.com/`,
      training_series_id: 2,
      days_from_start: 1
    },
    {
      subject: 'Divya, get your ID card.',
      body: `Go to Security with your driver's license to get your ID made.`,
      training_series_id: 2,
      days_from_start: 1
    },
    {
      subject: 'Welcome, Ben!',
      body: `Hi, I'm your Training Bot! I'll help you onboard.`,
      link: `https://trainingbot3.netlify.com/`,
      training_series_id: 3,
      days_from_start: 1
    },
    {
      subject: 'Ben, get your ID card.',
      body: `Go to Security with your driver's license to get your ID made.`,
      training_series_id: 3,
      days_from_start: 1
    },
    {
      subject: 'Welcome, Tom!',
      body: `Hi, I'm your Training Bot! I'll help you onboard.`,
      link: `https://trainingbot3.netlify.com/`,
      training_series_id: 4,
      days_from_start: 1
    },
    {
      subject: 'Tom, get your ID card.',
      body: `Go to Security with your driver's license to get your ID made.`,
      training_series_id: 4,
      days_from_start: 1
    },
    {
      subject: 'Welcome, Joe!',
      body: `Hi, I'm your Training Bot! I'll help you onboard.`,
      link: `https://trainingbot3.netlify.com/`,
      training_series_id: 5,
      days_from_start: 1
    },
    {
      subject: 'Joe, get your ID card.',
      body: `Go to Security with your driver's license to get your ID made.`,
      training_series_id: 5,
      days_from_start: 1
    }
  ]
  return await knex('messages').insert(messages)
}
