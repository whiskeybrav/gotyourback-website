import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App";

const app = document.querySelector("#root");
ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, app);