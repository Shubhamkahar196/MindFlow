import mongoose,  {  Schema ,InferSchemaType} from "mongoose";


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

export type User = InferSchemaType<typeof userSchema>;

const User = mongoose.models.User ||  mongoose.model("User",userSchema);

export default User