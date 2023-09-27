import React from "react";
import { MikrofrontendPanel } from "./common/MikrofrontendPanel";

export const IkkeAktuellPanel = () => {
  return (
    <MikrofrontendPanel
      headingText="Aktivitetsplikten er ikke relevant for deg"
      bodyText="NAV vurderer at aktivitetsplikten ikke er aktuell for deg"
      alertStyle="info"
    />
  );
};
