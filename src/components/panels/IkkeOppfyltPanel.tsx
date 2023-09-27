import React from "react";
import { MikrofrontendPanel } from "./common/MikrofrontendPanel";

export const IkkeOppfyltPanel = () => {
  return (
    <MikrofrontendPanel
      headingText="Aktivitetskrav vurdert"
      bodyText="NAV har vurdert aktivitetskravet ditt, du vil motta mer informasjon snarlig"
      alertStyle="success"
    />
  );
};
