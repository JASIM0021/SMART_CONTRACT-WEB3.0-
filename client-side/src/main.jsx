import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { TransactionsProvider } from "./context/TransactionsContext";
import "./index.css";

ReactDOM.render(
  <TransactionsProvider>
    <App />
  </TransactionsProvider>,
  document.getElementById("root"),
);