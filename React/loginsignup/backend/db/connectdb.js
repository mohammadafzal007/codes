import mongoose from "mongoose";
const connectdatabase=(MONGODBURI)=>{
    try{
mongoose.connect(MONGODBURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
console.log("MONGODB Connected")
    }
    catch(error)
    {
console.log("Database Error :",error)
    }
}


export default connectdatabase;