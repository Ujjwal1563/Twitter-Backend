import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
const app = express();


app.listen(3000, async () => {
  console.log("Server started at 3000");
  mongoose.connect(process.env.URI);
  console.log("MongoDB connected");
});
