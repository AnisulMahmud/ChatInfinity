import React, { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  // run only one time because of the empty dependecy array
  useEffect(() => {
    const getConversation = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/users", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setConversations(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        toast.error(error.message);
        setLoading(false);
      }
    };

    getConversation();
  }, []);

  return { loading, conversations };
};

export default useGetConversations;
