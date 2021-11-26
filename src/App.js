import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <>
      <div className="app">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/login" element={<LoginScreen />} />
          </Routes>
          {/* <Route component={RegisterScreen} /> */}
        </Router>

        {/* <h1>Hello Consulators</h1> */}
      </div>
    </>
  );
};

export default App;
