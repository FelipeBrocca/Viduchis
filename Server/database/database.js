import mongoose from 'mongoose';
import { CONNECTION_URI } from './config/config.js';

export async function connectDB(){
    try{
        const db = await mongoose.connect(CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('Connected to database');
    } catch (error) {
        console.log(error);
    }
}