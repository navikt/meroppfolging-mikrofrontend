import React from "react";
import App from "./App";

describe("<App />", () => {
  it("Displays forhåndsvarsel-info if status is forhåndsvarsel", () => {
    cy.mountWithStubs(<App />, { status: "FORHANDSVARSEL" });

    cy.contains("Varsel om stans av sykepenger");
    cy.contains("Vi har vurdert at du ikke oppfyller vilkårene for å unntas aktivitetsplikten");

    cy.contains("Les brevet fra NAV");
  });
});
