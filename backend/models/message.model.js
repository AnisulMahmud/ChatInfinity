import mongoose from "mongoose";


const messageSchema = new mongoose.Schema({
    senderId: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    
    
    receiverId: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'User',  
        required: true
    },

    message: {
        type: String,
        required: true
    }
    
    
   

  
    
}, 
{timestamps: true}
);
// using timestamps: true will automatically add a createdAt and updatedAt field to our schema


const Message = mongoose.model('Message', messageSchema);



export default Message;