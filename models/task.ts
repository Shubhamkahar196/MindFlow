import mongoose, { InferSchemaType, Schema } from 'mongoose';

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description:{
        type: String,
        default: "",
        trim: true,
    },
    completed: {
        type: Boolean,
        default: false
    },
    userId:{
        type: Schema.Types.ObjectId,
    ref:"User",
    required: true,
    }
    
},{timestamps:true})

export type Task = InferSchemaType<typeof taskSchema>;

const Task = mongoose.models.Task ||  mongoose.model("Task",taskSchema);

export default Task;