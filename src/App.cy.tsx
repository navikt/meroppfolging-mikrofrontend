import React from "react";
import App from "./App";

describe("<App />", () => {
  it("Displays forhåndsvarsel-info if status is forhåndsvarsel", () => {
    cy.mountWithStubs(<App />, { status: "FORHANDSVARSEL" });

    cy.contains("Mulig stans av sykepenger");

    cy.contains("Les brevet fra NAV");
  });
});
