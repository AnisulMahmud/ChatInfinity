import { set } from "mongoose";
import React, { useState } from "react";
import toast from "react-hot-toast";

const useSignup = () => {
  const [loading, setLoading] = useState(false);

  const signup = async ({ fullname, username, password, confirmPassword, gender }) => {
    const noError = handleErrors({ fullname, username, password, confirmPassword, gender });

    if (!noError) return;

    setLoading(true);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name: fullname, username, password, confirmPassword, gender }),
      });

      const data = await response.json();
      console.log(data);
      if (data.error) {
        throw new Error(data.error);
      }
      setLoading(false);
      // setting in local storage
      // context
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  return { signup, loading };
};

export default useSignup;

function handleErrors({ fullname, username, password, confirmPassword, gender }) {
  if (!fullname || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill all fields");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password should be atleast 6 characters long");
    return false;
  }

  return true;
}
