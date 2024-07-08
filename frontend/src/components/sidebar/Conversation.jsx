import React from "react";
import useConversation from "../../store/useConversation.js";

const Conversation = ({ conversation, lastIdndex, RandomEmoji }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
      ${isSelected ? "bg-sky-300" : ""}
      `}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="avatar online">
          <div className="w-24 rounded-full">
            <img src={conversation.profilePicture} />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200"> {conversation.name}</p>
            <span className="text-xl">{RandomEmoji}</span>
          </div>
        </div>
      </div>

      {!lastIdndex && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default Conversation;
