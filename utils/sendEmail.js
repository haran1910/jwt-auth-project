const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL, // Add your Gmail email in your .env file
            pass: process.env.PASSWORD // Add your Gmail app password in your .env file
        }
    });

    const mailOptions = {
        from: 'Your App <yourapp@example.com>',
        to: options.email,
        subject: options.subject,
        text: options.message
    };

    await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
