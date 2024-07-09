import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import MessageLoader from "../MessageLoader/MessageLoader";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  const { loading, messages } = useGetMessages();
  useListenMessages();
  const lastMessage = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastMessage.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessage}>
            <Message message={message} />
          </div>
        ))}

      {loading && renderMessageLoaders()}

      {!loading && messages.length === 0 && <p className="text-center text-gray-400">No messages yet ! ! </p>}
    </div>
  );
};

export default Messages;

function renderMessageLoaders() {
  return Array.from({ length: 5 }, (_, index) => <MessageLoader key={index} />);
}
