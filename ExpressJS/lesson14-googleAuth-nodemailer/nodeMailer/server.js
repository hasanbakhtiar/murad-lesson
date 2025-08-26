const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

app.get('/', async (req, res) => {
    res.send("Hello World");
    const transporter = nodemailer.createTransport({
        host: 'mail.webluna.org',
        port: 587,
        secure: false,
        auth: {
            user: "no-reply@webluna.org",
            pass: "no-reply@"
        }
    })

    try {
        const info = await transporter.sendMail({
            from: "Webluna Software <no-reply@webluna.org>",
            to: "murad@webluna.org",
            subject: "Super",
            text: "Good",
            html: "<h1>Very good</h1>"
        });
        console.log('Message sent:', info.messageId);

    } catch (error) {
        console.log(error);

    }
});



app.listen(3000, () => {
    console.log('start server')
})