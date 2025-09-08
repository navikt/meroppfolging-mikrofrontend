import { mount } from "cypress/react";
import { SWRConfig } from "swr";
import { MerOppfolgingStatusDTO } from "../../src/schema/merOppfolgingStatusSchema";

export interface StubResponses {
  merOppfolgingResponse?: MerOppfolgingStatusDTO;
}

export const mountWithStubs = (componentUnderTest: JSX.Element, stubResponses: StubResponses) => {
  cy.intercept("/api/mikrofrontend/v1/status", stubResponses.merOppfolgingResponse).as("hentMerOppfolgingStatus");

  return mount(<SWRConfig value={{ provider: () => new Map() }}>{componentUnderTest}</SWRConfig>);
};
