import React from "react";
import App from "./App";

describe("<App />", () => {
  it("Displays forhåndsvarsel-info with link to journalpost if status is forhåndsvarsel and has journalpostid", () => {
    cy.mountWithStubs(<App />, { status: "FORHANDSVARSEL", journalpostId: "123" });

    cy.get("#mikrofrontend__linkPanel").contains("Mulig stans av sykepenger");
  });

  it("Displays forhåndsvarsel-info with fallback-text and no link if status is forhåndsvarsel and no journalpostid", () => {
    cy.mountWithStubs(<App />, { status: "FORHANDSVARSEL" });

    cy.get("#mikrofrontend__panel").contains("Mulig stans av sykepenger");
  });
});
