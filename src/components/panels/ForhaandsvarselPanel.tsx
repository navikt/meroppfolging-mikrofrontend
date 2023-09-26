import { Button } from "@navikt/ds-react";
import { logEvent } from "../../amplitude/amplitude";
import React from "react";
import { MikrofrontendPanel } from "./common/MikrofrontendPanel";

export const ForhaandsvarselPanel = () => {
  return (
    <MikrofrontendPanel
      headingText="Mulig stans av sykepenger"
      bodyText="NAV vurderer at du ikke ikke kan unntas aktivitetsplikten"
      alertStyle="error"
    >
      <Button variant="secondary" onClick={() => logEvent("Forhåndsvarsel: Åpner PDF")}>
        Les brevet fra NAV
      </Button>
    </MikrofrontendPanel>
  );
};
