import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../store/useConversation";

const Message = ({ message }) => {
  const { user } = useAuthContext();
  const { selectedConversation } = useConversation();
  const myMessage = message.senderId === user._id;
  const chatClass = myMessage ? "chat-end" : "chat-start";
  const profilePic = myMessage ? user.profilePicture : selectedConversation.profilePicture;
  const messageColor = myMessage ? "bg-blue-500" : "bg-gray-500";
  const messageSendingTime = extractTime(message.createdAt);
  const shouldShake = message.shouldShake ? "shake" : "";
  return (
    <div className={`chat ${chatClass}`}>
      <div className="chat-image avatar">
        <div className="w-8 rounded">
          <img src={profilePic} />
        </div>
      </div>
      <div className={`chat-bubble text-white ${shouldShake} ${messageColor} pb-2`}>{message.message}</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1">{messageSendingTime}</div>
    </div>
  );
};

export default Message;

function extractTime(dateString) {
  const date = new Date(dateString);
  const hours = paddingZero(date.getHours());
  const minutes = paddingZero(date.getMinutes());
  return `${hours}:${minutes}`;
}

function paddingZero(number) {
  return number.toString().padStart(2, "0");
}
