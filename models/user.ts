import mongoose,  {  Schema } from "mongoose";


const userSchema = new Schema({
     
    fullName :{
        type:String,
        required: true,
        trim: true,

    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    password: {
        type:String,
        required: true,
    }
})

const User = mongoose.models.Task ||  mongoose.model("User",userSchema);

export default User