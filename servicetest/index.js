// run all these test, make like a curses menu or something
require("dotenv").config({ path: "../.env" });
// Dependencies
const sendgrid = require("@sendgrid/mail");
const read = require("readline").createInterface({ input: process.stdin, output: process.stdout });
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

read.question(`SendGrid Test! What's your email? `, email => {
  //todo, make interactive with
  const msg = {
    to: `${email}`,
    from: {
      email: process.env.SENDGRID_SEND_EMAIL,
      name: "Training Bot"
    },
    replyTo: {
      email: process.env.SENDGRID_SEND_EMAIL,
      name: "Training Bot"
    },
    dynamicTemplateData: {
      big_subject: "Hello World, This is Template Test!",
      first_name: "user",
      subject: "Template Config Test",
      body: "This is a test of a sendgrid service configurations",
      link: "Backend/servicetest/index.js"
    },
    templateId: process.env.SENDGRID_TEMPLATE_ID
  };
  sendgrid.send(msg);
  // console.log(msg)
  console.log(
    `Check the console log, your email, and the spam folder, ${email}!`
  );
  read.close();
});
