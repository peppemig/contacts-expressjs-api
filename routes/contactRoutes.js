import express from "express"
const router = express.Router()
import { getAllContacts, createNewContact, getSingleContact, updateContact, deleteContact } from "../controllers/contactController.js"

router.route("/").get(getAllContacts)

router.route("/:id").get(getSingleContact)

router.route("/").post(createNewContact)

router.route("/:id").put(updateContact)

router.route("/:id").delete(deleteContact)

export default router