import mongoose from "mongoose";

const condb=(URI)=>{
    try {
        mongoose.connect(URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("MongoDB Connected Successfully")
    
    } catch (error) {
        console.log(" Database Error :"+error)
    }
}

export default condb;