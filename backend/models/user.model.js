import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 20
    },
    
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    
    password:{
        type: String,
        required: true,
        min: 6
    },

    gender: {
        type: String,
        required: true,
        enum: ["male", "female"]
    },

    profilePicture:{
        type: String,
        default: ""
    },
    
},
{timestamps: true}
);

// using timestamps: true will automatically add a createdAt and updatedAt field to our schema


const User = mongoose.model('User', userSchema);



export default User;