import React, { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext.jsx";
import useConversation from "../store/useConversation";
import messageSound from "../assets/notification/sound.mp3";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("new-message", (newMessage) => {
      newMessage.shouldShake = true;
      const sound = new Audio(messageSound);
      sound.play();
      setMessages([...messages, newMessage]);
    });

    return () => {
      socket?.off("new-message");
    };
  }, [socket, messages, setMessages]);
};

export default useListenMessages;
