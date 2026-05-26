import express from "express";
import "dotenv/config";
import videoRoutes from "../routes/videos.js"
import commentRoutes from "../routes/comments.js"
import mongoose from "mongoose"
import cors from 'cors'






const app =  express();
const PORT = process.env.PORT || 5001;

console.log({PORT});

// dotenv.config()


const connect = ()=>{
    mongoose.connect(process.env.MONGO_URI)
   .then(() =>{
        console.log("Connect to db")    })
             .catch(err=>{throw err;

    });
 };


app.use([express.json(), cors()])

app.use("/api/videos", videoRoutes)
app.use("/api/comments", commentRoutes)
// app.use(cors());


// app.use((err,req,res,next) =>{
//     const status = err.status || 500;
//     const message = err.message || "Something went wrong!";
    
//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
//     next();

//     return res.status(status).json({
//         success: false,
//         status,
//         message,

//     });
// });


app.listen(5001,()=> {
     connect()
console.log("Connected to server")
})