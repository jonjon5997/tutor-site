import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Courses from "./components/Courses";
import Login from "./components/Login";
import Teachers from "./components/Teachers";
import Profile from "./components/Profile";
import { Navigate } from "react-router-dom";
import Register from "./components/Register";
import Update from "./components/Update";
import WatchVideo from "./components/WatchVideo";
import Playlist from "./components/Playlist";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/home" element={<Navigate to="/home" />} /> */}
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/update" element={<Update />} />
        <Route path="/watch-video" element={<WatchVideo />} />
        <Route path="/playlist" element={<Playlist />} />
      </Routes>
    </Router>
  );
}

export default App;
