import React from "react";
import { Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";

const App = () => {
  return (
    <>
      {/* <div className="app"> */}
      <Router>
        <Route component={RegisterScreen} />
        <Route path="/login" component={LoginScreen} />
      </Router>

      {/* <h1>Hello Consulators</h1> */}
      {/* </div> */}
    </>
  );
};

export default App;
