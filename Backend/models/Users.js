import mongoose, { Schema } from "mongoose"

const UserSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});

const users = mongoose.model("users" , UserSchema) ;

export default users;