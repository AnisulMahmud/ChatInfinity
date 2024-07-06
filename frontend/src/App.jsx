import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div className="p-4 h-screen flex items-center justify-center">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
