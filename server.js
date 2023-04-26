import express from "express"
import dotenv from "dotenv"
import contactRoutes from "./routes/contactRoutes.js"
import { errorHandler } from "./middleware/errorHandler.js"
import connectDb from "./config/dbConnection.js"

//CONFIG
dotenv.config()
connectDb()
const app = express()
const port = process.env.PORT || 5000


app.use(express.json())

//ENDPOINTS
app.use("/api/contacts", contactRoutes)

app.use(errorHandler)


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})