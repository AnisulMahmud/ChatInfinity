import React from "react";

import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useLogout = () => {
  const { setUser } = useAuthContext();

  const logout = async () => {
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.removeItem("ChatUser");
      setUser(null);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return { logout };
};

export default useLogout;
