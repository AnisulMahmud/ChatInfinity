import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import { connect } from 'mongoose';
import connectToMongoDB from './db/connectMongoDB.js';
import cookieParser from 'cookie-parser';


const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;



// to use json data in the body of the request
app.use(express.json());
app.use(cookieParser()); // calling this middleware to access the cookies

// routes for all Routes

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);



app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`);
});