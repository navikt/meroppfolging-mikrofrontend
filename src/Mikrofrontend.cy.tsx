import React from "react";
import Mikrofrontend from "./Mikrofrontend";
import { createNeedsHelpResponse } from "./mocks/fixtures/factories/senoppfolging";

describe("<Mikrofrontend />", () => {
  it("Displays simple linkpanel", () => {
    const senOppfolgingResponse = createNeedsHelpResponse();
    cy.mountWithStubs(<Mikrofrontend />, { senOppfolgingResponse: senOppfolgingResponse });

    cy.get("#mikrofrontend__linkPanel").contains("Snart slutt på sykepengene");
  });
});
