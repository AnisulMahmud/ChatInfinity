import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className=" w-full p-6 bg-brown-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border border-gray-100">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-gray-500">TalkSphere</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-50">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="input input-bordered w-full h-10"
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text text-gray-50">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="input input-bordered w-full h-10"
            />
          </div>
          <Link
            to="/signup"
            className="text-sm  hover:underline hover:text-green-300 mt-2 inline-block"
          >
            Don't have an account?
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
