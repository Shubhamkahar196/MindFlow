import mongoose,  {  Schema } from "mongoose";


const userSchema = new Schema({
     
   email: {
    type:String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
   },
   provide: {
    type: String,
    required: true,
    default: "google"
   }
},{timestamps: true})

const User = mongoose.models.User ||  mongoose.model("User",userSchema);

export default User