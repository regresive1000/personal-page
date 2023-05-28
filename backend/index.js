import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv';
import conectarDB from './config/db.js';
import landingRoute from './routes/landingRoute.js'


const app = express();
app.use(express.json());


dotenv.config();
conectarDB();

const dominiosPermitidos = [process.env.FRONTEND_URL];
const corsOptions = {
    origin: function(origin, callback) {
        if(dominiosPermitidos.indexOf(origin) !== -1 ) { // Si el origen esta en la lista de dominios permitidos y el -1 quiere decir si no lo encontro
            // El Origen del Request esta permitido
            callback(null, true); // Null es el error, true le permite el acceso
        } else {
            callback(new Error('No permitido por CORS'));
        }
    }
}

app.use(cors(corsOptions));


app.use('/', landingRoute);




const PORT = process.env.PORT || 3222;

app.listen(PORT, () => {
    console.log(`Aplicación escuchando en puerto ${PORT}`)
});