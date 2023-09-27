import "./commands";
import { mount, MountReturn } from "cypress/react18";
import { mountWithStubs } from "../utils/mountWithMocks";
import { AktivitetskravVurdering } from "../../src/schema/aktivitetskravVurderingSchema";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
      mountWithStubs: (
        componentUnderTest: JSX.Element,
        vurdering: AktivitetskravVurdering
      ) => Cypress.Chainable<MountReturn>;
    }
  }
}

Cypress.Commands.add("mount", mount);
Cypress.Commands.add("mountWithStubs", mountWithStubs);
