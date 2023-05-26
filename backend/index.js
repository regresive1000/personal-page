import express from 'express';
import dotenv from 'dotenv';
import conectarDB from './config/db.js';
import landingRoute from './routes/landingRoute.js'


const app = express();
app.use(express.json());


dotenv.config();
conectarDB();



app.use('/', landingRoute);




const PORT = process.env.PORT || 3222;

app.listen(PORT, () => {
    console.log(`Aplicación escuchando en puerto ${PORT}`)
});