import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
const App = () => {
  return (
    <div className="app">
      <Router>
        <HomeScreen />
      </Router>
      {/* <h1>Hello Consulators</h1> */}
    </div>
  );
};

export default App;
