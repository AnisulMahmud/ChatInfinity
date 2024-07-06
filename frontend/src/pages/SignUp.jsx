import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Gender from "./checkbox/Gender";
import useSignup from "../hooks/useSignup";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { signup, loading } = useSignup();

  const handleGender = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className=" w-full p-6 bg-brown-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border border-gray-100">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sing Up
          <span className="text-gray-500"> TalkSphere</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-50">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter full name"
              className="input input-bordered w-full h-10"
              value={inputs.fullname}
              onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-50">User Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="input input-bordered w-full h-10"
              value={inputs.username}
              onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text text-gray-50">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="input input-bordered w-full h-10"
              value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text text-gray-50">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className="input input-bordered w-full h-10"
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
            />
          </div>

          <Gender onCheckboxChange={handleGender} selectedGender={inputs.gender} />

          <Link to="/login" className="text-sm  hover:underline hover:text-green-300 mt-2 inline-block">
            Already have an account?
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2" disabled={loading}>
              {loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
