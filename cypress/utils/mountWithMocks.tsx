import { mount } from "cypress/react18";
import { SWRConfig } from "swr";
import { BrevDTO } from "../../src/schema/brevSchema";

export interface StubResponses {
  dialogmoteResponse?: BrevDTO[];
}

export const mountWithStubs = (componentUnderTest: JSX.Element, stubResponses: StubResponses) => {
  cy.intercept("/api/v2/arbeidstaker/brev", stubResponses.dialogmoteResponse || []).as("hentBrev");

  return mount(<SWRConfig value={{ provider: () => new Map() }}>{componentUnderTest}</SWRConfig>);
};
