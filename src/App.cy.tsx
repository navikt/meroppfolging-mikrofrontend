import React from "react";
import App from "./App";
import {
  createDoesntNeedHelpResponse,
  createKartleggingsspormalResponse,
  createNeedsHelpResponse,
  createNoResponse,
  createOutdatedResponse,
} from "./mocks/fixtures/factories/meroppfolging";
import { MerOppfolgingStatusDTO } from "./schema/merOppfolgingStatusSchema";

const mountWithResponse = (response: MerOppfolgingStatusDTO) => {
  cy.mountWithStubs(<App />, { merOppfolgingResponse: response });
};

describe("App", () => {
  describe("Sen oppfølging", () => {
    it("Displays needs help content for status TRENGER_OPPFOLGING", () => {
      const response = createNeedsHelpResponse();
      mountWithResponse(response);
      cy.contains("Snart slutt på sykepengene");
      cy.contains("Du har svart at du ønsker oppfølging");
      cy.contains(response.senOppfolgingStatus!.responseTime!);
    });

    it("Displays doesnt need help content for status TRENGER_IKKE_OPPFOLGING", () => {
      const response = createDoesntNeedHelpResponse();
      mountWithResponse(response);
      cy.contains("Snart slutt på sykepengene");
      cy.contains("Du har svart at du ikke trenger oppfølging nå.");
      cy.contains(response.senOppfolgingStatus!.responseTime!);
    });

    it("Hides panel for outdated response", () => {
      mountWithResponse(createOutdatedResponse());
      cy.contains("Snart slutt på sykepengene").should("not.exist");
      cy.contains("Du har svart at du ikke trenger oppfølging nå").should("not.exist");
    });

    it("Asks user to respond if not yet responded, and displays maxdate if exists", () => {
      mountWithResponse(createNoResponse({ maxDate: "31. desember 2024" }));
      cy.contains("Snart slutt på sykepengene");
      cy.contains("31. desember 2024 er din siste dag med sykepenger.");
      cy.contains("Vi ber deg derfor vurdere situasjonen din.");
      cy.contains("Du har ikke svart");
    });

    it("Asks user to respond if not yet responded, and hides maxdate if it doesnt exist", () => {
      mountWithResponse(createNoResponse({ maxDate: null }));
      cy.contains("Snart slutt på sykepengene");
      cy.contains("Det nærmer seg siste dag du kan motta sykepenger.");
      cy.contains("Vi ber deg derfor vurdere situasjonen din.");
      cy.contains("Du har ikke svart");
    });
  });

  describe("Kartlegging", () => {
    it("Renders kartleggingsspørsmål view", () => {
      mountWithResponse(createKartleggingsspormalResponse());

      cy.contains("Snart slutt på sykepengene").should("not.exist");
      cy.contains("Behovsrettet"); //todo
    });
  });
});
