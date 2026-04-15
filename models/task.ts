import mongoose, { Schema } from 'mongoose';

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description:{
        type: String,
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const Task = mongoose.models.Task ||  mongoose.model("Task",taskSchema);

export default Task;