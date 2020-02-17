const mailer = require('nodemailer');

const config = {
    host: 'smtp.mailtrap.io',
    port: 25,
    auth: {
        user: '3d9aedc0e2bc3e',
        pass: '674a649a80ef76'
    }
}

const transporter = mailer.createTransport(config)

exports.enviarEmail = (req,res) => {
  
  const message = {
    from: req.body.email,
    to: 'alvesrafael17@hotmail.com',
    subject: 'Contato',
    text: req.body.info
  }
  transporter.sendMail(message, (error, info) => {
    if (error) return res.status(400).json({sended: false})

    return res.status(200).json({sended: true})
  })
} 