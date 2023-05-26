import mongoose from "mongoose";


const mailSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true
    },
    asunto: {
        type: String,
        default: null,
    },
    mensaje: {
        type: String,
        required: true
    }

})


const Mail = mongoose.model("Mail", mailSchema);
export default Mail;