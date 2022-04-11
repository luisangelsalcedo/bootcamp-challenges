import React from "react";
import { render } from "react-dom";
import { App } from "./app";

import "./index.css";
import "font-awesome/css/font-awesome.min.css";

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

/** 
 * ? config React 18
 import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";

import "./index.css";
import "font-awesome/css/font-awesome.min.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
 */
