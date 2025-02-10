import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const connect=  async ()=>{
    await mongoose.connect(process.env.URI);
} 

export default connect;