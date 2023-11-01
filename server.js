const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Choose the port you want to use

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('assets'));

app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
            user: 'harmany@hotmail.ca',
            pass: 'sdib38BD7b38d6f5$%^d2rc3d'
        }
    });

    const mailOptions = {
        from: 'harmany@hotmail.ca',
        to: 'harmany@hotmail.ca',
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.error(error);
        }
        console.log('Email sent:', info.response);
    });

    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
