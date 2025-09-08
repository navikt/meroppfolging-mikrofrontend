import React, { ReactElement } from "react";
import { MikrofrontendLinkPanel } from "../panels/MikrofrontendLinkPanel";

export const Kartleggingsspormal = (): ReactElement => {
  return (
    <MikrofrontendLinkPanel
      headingText="Behovsrettet oppføging header"
      bodyText="Behovsrettet oppføging body"
      alertStyle="info"
      tag={{ variant: "info-moderate", text: `Her kan vi ha en tag om vi har lyst` }}
    />
  );
};
