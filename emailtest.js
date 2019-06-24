require('dotenv').config();
// Dependencies
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: 'trainingbot3@gmail.com',
  from: {
    email: process.env.SENDGRID_SEND_EMAIL,
    name: "Training Bot"
  },
  replyTo: {
    email: process.env.SENDGRID_SEND_EMAIL,
    name: "Training Bot"
  },
  dynamicTemplateData: {
    big_subject: "Hello BIG Subjecct! A Reminder from Training Bot",
    first_name: "Hello First Name World!",
    subject: "Hello subject world",
    body: "Hello body world",
    link: "Hello Link world!"
  },
  templateId: process.env.SENDGRID_TEMPLATE_ID
};
sgMail.send(msg);
// console.log(msg)