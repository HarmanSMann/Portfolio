const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000; // Choose the port you want to use

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("assets"));
app.use(cors());

app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "harmany@hotmail.ca",
      pass: "jhhzpegmatocovty",
    },
  });

  const mailOptions = {
    from: "harmany@hotmail.ca",
    to: "harmany@hotmail.ca",
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
