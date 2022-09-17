import React, {Component, useState, useEffect} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MySchedulePage from './components/MySchedulePage'
import Friends from './components/Friends'
import Rate from './components/Rate'
import LandingPage from './components/LandingPage'
import MyProfilePage from './components/MyProfilePage'
import { Route, Routes } from "react-router-dom";

function App() {
  

  return (
    <Routes>
      <Route path="/schedule" element={<MySchedulePage />} />
      <Route path="/friends" element={<Friends/>} />
      <Route path="/rate" element={<Rate/>} />
      <Route path="/profile" element={<MyProfilePage />} />
      <Route path="/" element={<LandingPage/>} />
    </Routes>
  );
}

// require('dotenv').config(); // Load environment variables from .env file
// const Server = require('./server/server');
// const server = new Server();
// server.listen();

export default App;