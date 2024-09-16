import express from "express";
import dotenv from "dotenv";
import condb from "./database/connectdb.js";
import userRoute from "./routes/user.routes.js"
dotenv.config();
const PORT=process.env.PORT || 4000;
const MONGODBURI=process.env.MONGODBURI;
const app=express();
app.use(express.json())
app.get("/",(req,res)=>{
res.send("Hello Server");
})
app.use("/user",userRoute);
const start=async ()=>{
try{
    await condb(MONGODBURI);
    app.listen(PORT,()=>{
        console.log(`Server is listening on ${PORT}`)
    })
}
catch(error)
{

}
}

start();
