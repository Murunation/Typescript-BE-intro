import mongoose from "mongoose";

const TheaterSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
  },
  {
    collection: "theaters",
  }
);

const Theater = mongoose.model("Theater", TheaterSchema, "theaters");

export default Theater;
