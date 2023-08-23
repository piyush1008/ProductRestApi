const mongoose=require("mongoose");
const uri="mongodb+srv://piyushd:v0lV0eZYcEY9yez1@cluster0.e3dawnx.mongodb.net/"
const connectDB=(uri)=>{
    console.log("afasd");
    return mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

module.exports= connectDB;