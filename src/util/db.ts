import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const databaseUrl = process.env.DTABASR_URL as string;

const dbConnection = async () => {
    try {
        await mongoose.connect(databaseUrl);
        console.log("connected to mongo db succesfully")
    }
    catch (error) {
        console.log("error in connection to mongo db :", error)
    }
}

export default dbConnection;