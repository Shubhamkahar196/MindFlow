import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(" Please define MONGODB_URI in .env.local");
}

const connectDb = async()=>{
    try {
        const connectionInstance = await mongoose.connect(MONGODB_URI)
        console.log(`"MONGODB Connected Host db !!", ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("Mongodb is not connected",error);
        process.exit(1);
    }

}

export default connectDb