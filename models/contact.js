import { Schema, model } from "mongoose";

const contactShema = new Schema ({    
name: String,
email: String,
phone: String,
favorite: Boolean,
});


const Contact = model("contact", contactShema)

export default Contact;


