import mongoose from "mongoose";

const ContactSchema = mongoose.Schema({
    name: {type: String, required: [true, "Please add contact name"]},
    email: {type: String, required: [true, "Please add contact email"]},
    phone: {type: String, required: [true, "Please add contact phone number"]}
}, {timestamps: true})

export default mongoose.model("Contact", ContactSchema)