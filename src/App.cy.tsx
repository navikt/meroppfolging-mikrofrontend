import React from "react";
import App from "./App";
import {
  createDoesntNeedHelpResponse,
  createNeedsHelpResponse,
  createNoResponse,
} from "./mocks/fixtures/factories/senoppfolging";

describe("<App />", () => {
  it("User has responded that they need help", () => {
    cy.mountWithStubs(<App />, { senOppfolgingResponse: createNeedsHelpResponse() });

    cy.contains("Snart slutt på sykepengene");
    cy.contains("Du har svart at du har behov for hjelp");
    cy.contains("Du svarte den 12.03.2024");
  });

  it("User has responded that they doesn't need help", () => {
    cy.mountWithStubs(<App />, { senOppfolgingResponse: createDoesntNeedHelpResponse() });

    cy.contains("Snart slutt på sykepengene");
    cy.contains("Du har svart at du ikke har behov for hjelp");
    cy.contains("Du svarte den 12.03.2024");
  });

  it("User hasn't responded", () => {
    cy.mountWithStubs(<App />, { senOppfolgingResponse: createNoResponse({ maxDate: "31.12.2024" }) });

    cy.contains("Snart slutt på sykepengene");
    cy.contains("Den 31.12.2024 er datoen du ikke lenger vil motta sykepenger (maksdato).");
    cy.contains("Vi trenger derfor at du svarer på noen få spørsmål om situasjonen du står i så vi kan hjelpe deg");
    cy.contains("Du har ikke svart");
  });

  it("User hasn't responded and don't have maxdate", () => {
    cy.mountWithStubs(<App />, { senOppfolgingResponse: createNoResponse({ maxDate: null }) });

    cy.contains("Snart slutt på sykepengene");
    cy.contains("Det nærmer seg datoen du ikke lenger vil motta sykepenger.");
    cy.contains("Vi trenger derfor at du svarer på noen få spørsmål om situasjonen du står i så vi kan hjelpe deg");
    cy.contains("Du har ikke svart");
  });
});
