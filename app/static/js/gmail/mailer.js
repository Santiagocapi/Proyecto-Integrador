const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "entradasargentinaeventos@gmail.com",
    pass: "gcji qzjq mbxw mpnq",
  },
});

transporter.verify().then(() => {
    console.log("Funciona");
});

module.exports = transporter; 
