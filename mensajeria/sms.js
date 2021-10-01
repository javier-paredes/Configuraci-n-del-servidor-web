const dotenv = require('dotenv');
dotenv.config();
let accountSid = process.env.SMS_SID;
let authToken = process.env.SMS_TOKEN;

const client = require('twilio')(accountSid, authToken);

class Sms {
    constructor() {

    }

    enviarSMS(usuario, texto) {
        client.messages.create({
            body: `${usuario} mencionó a un administrador en el siguiente mensaje: ${texto}`,
            from: '+12673968346',
            to: process.env.SMS_NUMERO
        })
            .then(message => console.log(message.sid))
            .catch(console.log)

    }
}

module.exports = new Sms();