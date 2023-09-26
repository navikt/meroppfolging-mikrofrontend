import React from "react";
import { MikrofrontendLinkPanel } from "./common/MikrofrontendLinkPanel";

export const InfoPanel = () => {
  return (
    <MikrofrontendLinkPanel
      headingText="Info om aktivitetsplikt"
      bodyText="Les mer om aktivitetsplikten og hva den betyr for deg"
      alertStyle="info"
    />
  );
};
