import express from "express";
import { enviarMail } from '../controllers/landingController.js'

const router = express.Router();

// Envio de formulario
router.post('/', enviarMail);






export default router;