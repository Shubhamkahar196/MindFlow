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
        type: Boolean
    }
})

const Task = mongoose.model("Task",taskSchema);

export default Task;