import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({

    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],

    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Message',
            default: []
        }
    ]

},
{timestamps: true}
);

// using timestamps: true will automatically add a createdAt and updatedAt field to our schema

const Conversation = mongoose.model('Conversation', conversationSchema);

export default Conversation;