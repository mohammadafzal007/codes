const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
    try {
        // Create a transporter object using SMTP transport
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_USERNAME, // Your Gmail address
                pass: process.env.EMAIL_PASSWORD, // Your Gmail password
            },
        });

        // Define email options
        const mailOptions = {
            from: process.env.EMAIL_USERNAME,
            to: options.email,
            subject: options.subject,
            text: options.message,
        };

        // Send the email
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Email could not be sent');
    }
};

module.exports = sendEmail;
