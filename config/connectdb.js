import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

const url = process.env.MONGO_URL

const dbconnection = async ()=>{
     console.log("Trying to connect...")
    await mongoose.connect(url);
    console.log("Connected to DB")
}

export default dbconnection;