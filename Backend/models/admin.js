import mongoose from "mongoose";

const schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    required: true,
    type: String,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
}); 

export const Admin = mongoose.model("Admin", schema);
