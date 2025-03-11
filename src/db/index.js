import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const dbConnect=async()=>{
    try {
        const instanceOfMongodb = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
          console.log(`MongoDB Connected: ${instanceOfMongodb.connection.host}`);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
       }
}

export default dbConnect;