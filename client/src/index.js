import React from "react";
import ReactDOM from "react-dom";
import "./styles/css/main.css";
import AppRouter from "./routes";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<AppRouter />, document.getElementById("root"));
registerServiceWorker();
