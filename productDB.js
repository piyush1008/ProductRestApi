require("dotenv").config();
const connectDB=require("./db/connect");

const product=require("./models/product");

const ProductJson=require("./products.json");

const start=async()=>{
    try{
        await connectDB(process.env.MONGODB_URL);
        await product.deleteMany();
        await product.create(ProductJson);
        console.log("success");
    }
    catch(err)
    {
        console.log(err);
    }
}



start();
