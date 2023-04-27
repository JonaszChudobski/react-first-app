import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Alert } from "./components/Alert";

const App = () => {
  return (
    <>
      <Alert variant="info" outlined>
        Would you like to?
      </Alert>
      <Alert variant="error" elevated>
        There was some error during transaction
      </Alert>
      <Alert variant="success" outlined>
        Payment received.
      </Alert>
      <Alert variant="warning" elevated>
        Please update.
      </Alert>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
