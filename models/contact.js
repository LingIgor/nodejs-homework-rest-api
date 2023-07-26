import { Schema, model } from "mongoose";

const contactShema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  favorite: { type: Boolean, default: false },
});


contactShema.post("save", (error, data, next) => {
    error.status = 400;
    next()
})

const Contact = model("contact", contactShema);

export default Contact;
