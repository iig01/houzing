import React from "react";
import ReactDOM from "react-dom/client";
import RootContext from "./context";
import "antd/dist/antd.css";
import "./index.css";
import Root from "./root";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RootContext>
      <Root />
    </RootContext>
  </React.StrictMode>
);
