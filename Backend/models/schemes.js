import mongoose from "mongoose";

const reqString = {
  type: String,
  required: true,
}

const schema = new mongoose.Schema({
  title: {...reqString , unique: true,},
  description: reqString,
  department: reqString,
  category: reqString,
  eligibility: reqString,
  benefits: reqString,
  requiredDocuments: reqString,
  steps: reqString,
  flare: reqString,
  link: reqString,
  img: reqString,
  note: reqString,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Schemes = mongoose.model("Schemes", schema);
