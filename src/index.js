import dotenv from 'dotenv';
import dbConnect from './db/index.js';
dotenv.config({ path: "./.env" });
dbConnect();







/*
// import express from 'express';
// const app=express();

// (async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
//         app.on("error",(err)=>{
//             console.log("ERROR",err);
//             throw err;
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`server will start at port ${process.env.PORT}`)
//         })

//     } catch (error) {
//         console.error("error occur:", error);
//         throw error;
//     }
// })()
*/