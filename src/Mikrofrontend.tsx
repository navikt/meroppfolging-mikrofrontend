import React from "react";
import App from "./App";
import { ErrorBoundary } from "react-error-boundary";
import { logError } from "./faro/faro";

const Mikrofrontend = () => {
  return (
    <ErrorBoundary fallback={<></>} onError={logError}>
      <App />
    </ErrorBoundary>
  );
};

export default Mikrofrontend;
