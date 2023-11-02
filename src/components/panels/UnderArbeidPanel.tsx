import React from "react";
import { MikrofrontendLinkPanel } from "./common/MikrofrontendLinkPanel";
import { vurdererHeadingText } from "../../commonTexts";

export const UnderArbeidPanel = () => {
  return (
    <MikrofrontendLinkPanel
      headingText={vurdererHeadingText}
      bodyText="Les mer om aktivitetsplikten og hva den betyr for deg"
      alertStyle="info"
    />
  );
};
