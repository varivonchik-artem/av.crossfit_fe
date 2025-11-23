import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import { Header } from "./widgets/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);
