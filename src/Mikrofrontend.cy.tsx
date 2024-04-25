import React from "react";
import Mikrofrontend from "./Mikrofrontend";

describe("<Mikrofrontend />", () => {
  it("Displays simple linkpanel", () => {
    cy.mount(<Mikrofrontend />);

    cy.get("#mikrofrontend__linkPanel").contains("Snart slutt på sykepengene");
  });
});
