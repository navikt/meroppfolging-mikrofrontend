import { mount } from "cypress/react18";
import { SWRConfig } from "swr";
import { AktivitetskravVurdering } from "../../src/schema/aktivitetskravVurderingSchema";

export const mountWithStubs = (componentUnderTest: JSX.Element, vurdering: AktivitetskravVurdering) => {
  cy.intercept("/api/aktivitetskrav/vurdering", vurdering).as("hentVurdering");

  return mount(<SWRConfig value={{ provider: () => new Map() }}>{componentUnderTest}</SWRConfig>);
};
