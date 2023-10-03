import React from "react";
import { MikrofrontendLinkPanel } from "./common/MikrofrontendLinkPanel";

//Dette vil bli brukt for å vise info-siden på før-kandidat status som kommer
export const InfoPanel = () => {
  return (
    <MikrofrontendLinkPanel
      headingText="Info om aktivitetsplikt"
      bodyText="Les mer om aktivitetsplikten og hva den betyr for deg"
      alertStyle="info"
    />
  );
};
