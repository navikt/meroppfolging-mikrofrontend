import { mount } from "cypress/react18";
import { SWRConfig } from "swr";
import { SenOppfolgingStatusDTO } from "../../src/schema/senOppfolgingStatusSchema";

export interface StubResponses {
  senOppfolgingResponse?: SenOppfolgingStatusDTO;
}

export const mountWithStubs = (componentUnderTest: JSX.Element, stubResponses: StubResponses) => {
  cy.intercept("/api/meroppfolging/v2/senoppfolging/status", stubResponses.senOppfolgingResponse).as(
    "hentSenOppfolgingStatus",
  );

  return mount(<SWRConfig value={{ provider: () => new Map() }}>{componentUnderTest}</SWRConfig>);
};
