import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Create from "./components/Create";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/create" element={<Create />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
