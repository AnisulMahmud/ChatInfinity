import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import { connect } from 'mongoose';
import connectToMongoDB from './db/connectMongoDB.js';


const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

// app.get('/', (req, res) => {
//     res.send('Hello World!!!!');
// })

// to use json data in the body of the request
app.use(express.json());

// routes for authentication-> we will create a middleware for this, so that we can use it in any route

app.use("/api/auth", authRoutes);



app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`);
});