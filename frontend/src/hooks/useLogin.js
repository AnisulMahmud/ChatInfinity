import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setUser } = useAuthContext();

  const login = async ({ username, password }) => {
    const noError = handleErrors({ username, password });

    if (!noError) return;
    setLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
      console.log(data);
      setLoading(false);
      localStorage.setItem("ChatUser", JSON.stringify(data));
      setUser(data);
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };
  return { loading, login };
};

export default useLogin;

const handleErrors = ({ username, password }) => {
  if (!username || !password) {
    toast.error("Please fill all fields");
    return false;
  }

  return true;
};
