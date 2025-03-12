import dotenv from 'dotenv';
import dbConnect from './db/index.js';
dotenv.config({ path: "./.env" });
dbConnect()
.then(()=>{
     
    app.on("error",(err)=>{
         console.log("ERROR",err);
         throw err;
    })

    app.listen(process.env.PORT||8001,()=>{
        console.log(`sever will started at ${process.env.PORT}`)
    })
})
.catch((err)=>{console.log("mongo db connection error :",err)})







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