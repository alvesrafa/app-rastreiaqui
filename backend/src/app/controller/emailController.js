const mailer = require('nodemailer');
import {EMAIL_USERNAME, EMAIL_PASS} from '../../../env.json';
const config = {
    host: 'smtp.mailtrap.io',
    port: 25,
    auth: {
        user: EMAIL_USERNAME,
        pass: EMAIL_PASS
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