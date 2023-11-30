import React from "react";
import App from "./App";
import { addDaysToDate } from "./utils/dateUtils";
import { vurdererHeadingText } from "./commonTexts";

describe("<App />", () => {
  it("Displays linkpanel for forhåndsvarsel if journalpostid is present", () => {
    cy.mountWithStubs(<App />, {
      status: "FORHANDSVARSEL",
      journalpostId: "123",
      sistVurdert: new Date().toISOString(),
      fristDato: addDaysToDate(new Date(), 14).toISOString(),
    });

    cy.get("#mikrofrontend__linkPanel").contains("NAV vurderer å stanse sykepengene dine");
  });

  it("Displays under arbeid panel for forhåndsvarsel if no journalpostid is present", () => {
    cy.mountWithStubs(<App />, {
      status: "FORHANDSVARSEL",
      sistVurdert: new Date().toISOString(),
      fristDato: addDaysToDate(new Date(), 14).toISOString(),
    });

    cy.get("#mikrofrontend__linkPanel").contains("Les mer om aktivitetsplikten og hva den betyr for deg");
  });

  it("Displays under arbeid if status ny", () => {
    cy.mountWithStubs(<App />, { status: "NY" });

    cy.get("#mikrofrontend__linkPanel").contains(vurdererHeadingText);
  });
});
