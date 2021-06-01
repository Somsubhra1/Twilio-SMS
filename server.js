const express = require("express");
require("dotenv/config");

var accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
var authToken = process.env.TWILIO_AUTH_TOKEN; // Your Auth Token from www.twilio.com/console

var twilio = require("twilio")(accountSid, authToken);
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ hello: "world" });
});

app.post("/", (req, res) => {
  client.messages
    .create({
      body: req.body.msg,
      to: req.body.to, // Text this number
      from: process.env.TWILIO_NUMBER, // From a valid Twilio number
    })
    .then((message) => {
      console.log(message.sid);
      res.json({ success: true });
    });
});

const PORT = process.env.PORT || 5000;

app.listen(process.env.PORT, () =>
  console.log(`Server is running on port ${PORT}`)
);
