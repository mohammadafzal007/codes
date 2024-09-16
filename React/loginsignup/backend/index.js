import express from 'express';
import dotenv from "dotenv";
import cors from 'cors';
import connectdatabase from './db/connectdb.js';
import userRoute from './routes/user.routes.js'
const app=express();
dotenv.config()
const PORT=process.env.PORT || 4000;
const URI=process.env.MONGODBURI;

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
  res.send("<h1>Hello Server</h1>")
})

app.use('/user',userRoute);


const startserver= async ()=>{
  try {
    await connectdatabase(URI);
    app.listen((PORT),()=>{
      console.log(`Server is listening on ${PORT}`)
    })
  } 
  catch (error) {
    console.log("Server Starting Error",error)
  }
}


startserver();