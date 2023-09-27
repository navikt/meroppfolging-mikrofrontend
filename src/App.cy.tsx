import React from "react";
import App from "./App";

describe("<App />", () => {
  it("Displays linkpanel for forhåndsvarsel if journalpostid is present", () => {
    cy.mountWithStubs(<App />, { status: "FORHANDSVARSEL", journalpostId: "123" });

    cy.get("#mikrofrontend__linkPanel").contains("Mulig stans av sykepenger");
  });

  it("Displays regular panel for forhåndsvarsel if no journalpostid is present", () => {
    cy.mountWithStubs(<App />, { status: "FORHANDSVARSEL" });

    cy.get("#mikrofrontend__panel").contains("Mulig stans av sykepenger");
  });

  it("Displays under arbeid if status ny", () => {
    cy.mountWithStubs(<App />, { status: "NY" });

    cy.get("#mikrofrontend__panel").contains("NAV vurderer aktivitetsplikten din");
  });
});
