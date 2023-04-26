import asyncHandler from "express-async-handler"
import Contact from "../models/Contact.js"

//GET ALL CONTACTS
export const getAllContacts = asyncHandler(async (req,res) => {
    const contacts = await Contact.find()
    res.status(200).json(contacts)
})

//CREATE CONTACT
export const createNewContact = asyncHandler(async (req,res) => {
    const {name, email, phone} = req.body

    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory")
    }

    const newContact = await Contact.create({name: name, email: email, phone: phone})

    res.status(201).json(newContact)
})

//GET SINGLE CONTACT
export const getSingleContact = asyncHandler(async (req,res) => {
    const id = req.params.id

    const contact = await Contact.findById(id)

    if(!contact){
        res.status(404);
        throw new Error("Contact not found")
    }

    res.status(200).json(contact)
})

//UPDATE CONTACT
export const updateContact = asyncHandler(async (req,res) => {

    const id = req.params.id

    const contact = await Contact.findById(id)

    if(!contact){
        res.status(404);
        throw new Error("Contact not found")
    }

    const updatedContact = await Contact.findByIdAndUpdate(id, req.body, {new: true})

    res.status(200).json(updatedContact)
})

//DELETE CONTACT
export const deleteContact = asyncHandler(async (req,res) => {

    const id = req.params.id

    const contact = await Contact.findById(id)

    if(!contact){
        res.status(404);
        throw new Error("Contact not found")
    }

    const deletedContact = await Contact.findByIdAndDelete(id)

    res.status(200).json(deleteContact)
})