import React from "react";
import { createRoot } from "react-dom/client";
import Mikrofrontend from "./Mikrofrontend";
import { initFaro } from "./faro/faro";

const container = document.getElementById("root");
const root = createRoot(container!);

initFaro();

root.render(
  <React.StrictMode>
    <main>
      <Mikrofrontend />
    </main>
  </React.StrictMode>,
);
