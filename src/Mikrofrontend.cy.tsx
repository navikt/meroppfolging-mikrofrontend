import React from "react";
import Mikrofrontend from "./Mikrofrontend";
import { createNeedsHelpResponse } from "./mocks/fixtures/factories/meroppfolging";

describe("<Mikrofrontend />", () => {
  it("Displays simple linkpanel", () => {
    const needsHelpResponse = createNeedsHelpResponse();
    cy.mountWithStubs(<Mikrofrontend />, { merOppfolgingResponse: needsHelpResponse });

    cy.get("#mikrofrontend__linkPanel").contains("Snart slutt på sykepengene");
  });
});
