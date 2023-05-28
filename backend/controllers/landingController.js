import Mail from '../models/Mail.js'

const enviarMail = async (req, res) => {

    const { post } = req.body 
    
    try {
        // Generar un nuevo mail
        const mail = new Mail(post);
        // Guardar el mail
        const mailGuardado = await mail.save();
        
    } catch (error) {
        res.json({msj: error.message})
        return;
    }

    res.json({msj: 'Mail enviado correctamente'});
}


export {
    enviarMail
}