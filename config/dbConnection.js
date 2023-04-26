import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.DB_STRING)
        console.log("Connected to DB: ", connect.connection.host)
        console.log("DB name: ", connect.connection.name)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

export default connectDb