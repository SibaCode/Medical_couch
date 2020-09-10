const nodemailer = require("nodemailer");
const msg = require('./msg');
const { patient } = require("./msg");
require("dotenv").config();

/**
 * Sending an email to a user.
 * @param {*} email
 * @param {*} body
 * @param {*} _subject
 */
async function sendEmail(email, body, _subject) {
  //configuring smtp transport machanism for password reset email
  let transporter = nodemailer.createTransport({
    host: "mail.medicalcouch.co.za",
    port: 465,
     secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL || 'support@medicalcouch.co.za', // your gmail address
      pass: process.env.EMAIL_PASSWORD || 'yf5sFgLydHn?' // your gmail password
    }
    ,tls: { 
      rejectUnauthorized: false 
  }
  });

  let mailOptions = {
    subject: _subject,
    to: 'cj.sibusiso@gmail.com',
    from: `support@medicalcouch.co.za`,
    html: patient.register// html bodyr,
    
  };
  return transporter.sendMail(mailOptions);
}

module.exports = sendEmail ;