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
import dayjs from "dayjs";

const mountWithResponse = (response: MerOppfolgingStatusDTO) => {
  cy.mountWithStubs(<App />, { merOppfolgingResponse: response });
};

describe("App", () => {
  describe("Sen oppfølging", () => {
    it("Displays needs help content if user responded needs help", () => {
      const response = createNeedsHelpResponse();
      mountWithResponse(response);
      cy.contains("Snart slutt på sykepengene");
      cy.contains("Du har svart at du ønsker oppfølging");

      const expectedDate = dayjs(response.senOppfolgingStatus.responseDateTime!).format("DD.MM.YYYY");
      cy.contains(`Du svarte den ${expectedDate}`);
    });

    it("Displays doesnt need help content if user responded doesnt need help", () => {
      const response = createDoesntNeedHelpResponse();
      mountWithResponse(response);
      cy.contains("Snart slutt på sykepengene");
      cy.contains("Du har svart at du ikke trenger oppfølging nå.");

      const expectedDate = dayjs(response.senOppfolgingStatus.responseDateTime!).format("DD.MM.YYYY");
      cy.contains(expectedDate);
    });

    it("Hides panel for outdated response", () => {
      const response = createOutdatedResponse();
      mountWithResponse(response);
      cy.contains("Snart slutt på sykepengene").should("not.exist");
    });

    it("Asks user to respond, and displays maxdate", () => {
      const response = createNoResponse({ maxDate: "31. desember 2024" });
      mountWithResponse(response);
      cy.contains("31. desember 2024 er din siste dag med sykepenger.");
    });

    it("Asks user to respond, and hides maxdate view if it doesnt exist", () => {
      const response = createNoResponse({ maxDate: null });
      mountWithResponse(response);
      cy.contains("Det nærmer seg siste dag du kan motta sykepenger.");
      cy.contains("din siste dag med sykepenger").should("not.exist");
    });
  });

  describe("Kartlegging", () => {
    it("Renders kartleggingsspørsmål view", () => {
      const response = createKartleggingsspormalResponse(false, true);
      mountWithResponse(response);
      cy.contains("Kartlegging av din situasjon");
    });
  });
});
