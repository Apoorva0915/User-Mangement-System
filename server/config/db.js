const mongoose=require("mongoose")
mongoose.set("strictQuery",false)

const connectDB=async()=>{
  try{
    const conn=await mongoose.connect(process.env.MONGODB_URI)
    console.log(`database connected ${conn.connection.host}`)
}catch(error){
    console.error();
}
}


module.exports=connectDB;