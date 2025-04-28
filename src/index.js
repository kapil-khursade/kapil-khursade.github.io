import React from "react";
import ReactDOM from "react-dom/client";
import App from "./component/App.js";
import AppV2 from "./component/AppV2.js";
import "./css/index.css";
import { BrowserRouter } from "react-router";
 
const root = ReactDOM.createRoot(document.getElementById("root"));
 
root.render(
  <React.StrictMode>
      <AppV2 />
  </React.StrictMode>
);