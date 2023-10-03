import React from "react";
import App from "./App";
import { addDaysToDate } from "./utils/dateUtils";

describe("<App />", () => {
  it("Displays linkpanel for forhåndsvarsel if journalpostid is present", () => {
    cy.mountWithStubs(<App />, {
      status: "FORHANDSVARSEL",
      journalpostId: "123",
      sistVurdert: new Date().toISOString(),
      fristDato: addDaysToDate(new Date(), 14).toISOString(),
    });

    cy.get("#mikrofrontend__linkPanel").contains("Mulig stans av sykepenger");
  });

  it("Displays regular panel for forhåndsvarsel if no journalpostid is present", () => {
    cy.mountWithStubs(<App />, {
      status: "FORHANDSVARSEL",
      sistVurdert: new Date().toISOString(),
      fristDato: addDaysToDate(new Date(), 14).toISOString(),
    });

    cy.get("#mikrofrontend__panel").contains("Mulig stans av sykepenger");
  });

  it("Displays under arbeid if status ny", () => {
    cy.mountWithStubs(<App />, { status: "NY" });

    cy.get("#mikrofrontend__linkPanel").contains("NAV vurderer aktivitetsplikten din");
  });
});
