import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { user } = useAuthContext();
  return (
    <>
      <div className="p-4 h-screen flex items-center justify-center">
        <Routes>
          <Route path="/" element={user ? <Home /> : <Navigate to={"/login"} />}></Route>
          <Route path="/signup" element={user ? <Navigate to="/" /> : <SignUp />}></Route>
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />}></Route>
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
