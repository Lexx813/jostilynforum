import React from "react";
import ReactDOM from "react-dom";
import "./styles/css/main.css";
import AppRouter from "./routes";
import registerServiceWorker from "./registerServiceWorker";
// this is our render method to inject our react code into our html through the id root
ReactDOM.render(<AppRouter />, document.getElementById("root"));
registerServiceWorker();
