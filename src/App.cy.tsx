import React from "react";
import App from "./App";
import {
  createDoesntNeedHelpResponse,
  createNeedsHelpResponse,
  createNoResponse,
  createOutdatedResponse,
} from "./mocks/fixtures/factories/senoppfolging";

describe("<App />", () => {
  it("User has responded that they need help", () => {
    const senOppfolgingResponse = createNeedsHelpResponse();
    cy.mountWithStubs(<App />, { senOppfolgingResponse: senOppfolgingResponse });

    cy.contains("Snart slutt på sykepengene");
    cy.contains("Du har svart at du ønsker å snakke med en veileder");
    cy.contains(senOppfolgingResponse.responseTime!);
  });

  it("User has responded that they doesn't need help", () => {
    const senOppfolgingResponse = createDoesntNeedHelpResponse();
    cy.mountWithStubs(<App />, { senOppfolgingResponse: senOppfolgingResponse });

    cy.contains("Snart slutt på sykepengene");
    cy.contains("Du har svart at du ikke trenger å snakke med en veileder");
    cy.contains(senOppfolgingResponse.responseTime!);
  });

  it("User has responded more than one week ago", () => {
    cy.mountWithStubs(<App />, { senOppfolgingResponse: createOutdatedResponse() });

    cy.contains("Snart slutt på sykepengene").should("not.exist");
    cy.contains("Du har svart at du ikke trenger å snakke med en veileder").should("not.exist");
  });

  it("User hasn't responded", () => {
    cy.mountWithStubs(<App />, { senOppfolgingResponse: createNoResponse({ maxDate: "31. desember 2024" }) });

    cy.contains("Snart slutt på sykepengene");
    cy.contains("Siste dag du kan motta sykepenger er beregnet til 31. desember 2024.");
    cy.contains("Vi ber derfor om at du svarer på om du ønsker å snakke med en veileder.");
    cy.contains("Du har ikke svart");
  });

  it("User hasn't responded and don't have maxdate", () => {
    cy.mountWithStubs(<App />, { senOppfolgingResponse: createNoResponse({ maxDate: null }) });

    cy.contains("Snart slutt på sykepengene");
    cy.contains("Det nærmer seg siste dag du kan motta sykepenger.");
    cy.contains("Vi ber derfor om at du svarer på om du ønsker å snakke med en veileder.");
    cy.contains("Du har ikke svart");
  });
});
