import { mount } from "cypress/react18";
import { SWRConfig } from "swr";
import { createVurdering } from "../../src/mocks/fixtures/AktivitetskravFixture";
import { AktivitetskravStatus, VurderingArsak } from "../../src/schema/aktivitetskravVurderingSchema";

export interface StubResponses {
  status: AktivitetskravStatus;
  arsaker?: VurderingArsak[];
}

export const mountWithStubs = (componentUnderTest: JSX.Element, stubResponses: StubResponses) => {
  cy.intercept("/api/aktivitetskrav/vurdering", createVurdering(stubResponses.status, stubResponses.arsaker)).as(
    "hentVurdering"
  );

  return mount(<SWRConfig value={{ provider: () => new Map() }}>{componentUnderTest}</SWRConfig>);
};
