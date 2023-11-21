const nodemailer = require("nodemailer");

async function enviarCorreo(destinatario, asunto, mensaje) {
  try {
    
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        username: "entradasargentinaeventos@gmail.com",
        password: "elmascapito09",
      },
    });

    const mailOptions = {
      from: "entradasargentinaeventos@gmail.com",
      to: destinatario,
      subject: asunto,
      text: mensaje,
    };

    // Enviar el correo electrónico
    const info = await transporter.sendMail(mailOptions);
    console.log("Correo enviado:", info);

    return info;
  } catch (error) {
    console.error("Error al enviar el correo electrónico:", error);
    throw error;
  }
}

module.exports = { enviarCorreo };
