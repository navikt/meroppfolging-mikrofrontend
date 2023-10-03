import React from "react";
import App from "./App";
import styled from "styled-components";
import { ErrorBoundary } from "react-error-boundary";
import { logError } from "./faro/faro";

const Wrapper = styled.div`
  width: 100%;
  @media (min-width: 648px) {
    max-width: 444px;
  }
`;

const Mikrofrontend = () => {
  return (
    <ErrorBoundary fallback={<></>} onError={logError}>
      <Wrapper>
        <App />
      </Wrapper>
    </ErrorBoundary>
  );
};

export default Mikrofrontend;
