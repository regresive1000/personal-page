import Mail from '../models/Mail.js'

const enviarMail = async (req, res) => {

    console.log(req.body);
    
    try {
        // Generar un nuevo mail
        const mail = new Mail(req.body);
        // Guardar el mail
        const mailGuardado = await mail.save();
        
    } catch (error) {
        res.json({msj: error.message})
    }

    res.json({msj: 'Mail enviado correctamente'});
}


export {
    enviarMail
}