import express from 'express';
import dotenv from 'dotenv';
import landingRoute from './routes/landingRoute.js'


dotenv.config();
const app = express();
app.use(express.json());

app.use('/', landingRoute);




const PORT = process.env.PORT || 3222;

app.listen(PORT, () => {
    console.log(`Aplicación escuchando en puerto ${PORT}`)
});