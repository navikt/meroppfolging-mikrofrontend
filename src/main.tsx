import React from "react";
import { createRoot } from "react-dom/client";
import Mikrofrontend from "./Mikrofrontend";
import { initFaro } from "./faro/faro";
import { initMsw } from "./mocks/initMsw";

const container = document.getElementById("root");
const root = createRoot(container!);

initFaro();

initMsw().then(() => {
  root.render(
    <React.StrictMode>
      <main>
        <Mikrofrontend />
      </main>
    </React.StrictMode>,
  );
});
