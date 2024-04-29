import React from "react";
import { MikrofrontendLinkPanel } from "./components/panels/MikrofrontendLinkPanel";

const Mikrofrontend = () => {
  return (
    <MikrofrontendLinkPanel
      headingText="Snart slutt på sykepengene"
      bodyText="Du må ta stilling til hva du skal gjøre i god tid før sykepengene tar slutt"
      alertStyle="warning"
      tag={{ variant: "warning-moderate", text: "Les mer om dine muligheter fremover" }}
    />
  );
};

export default Mikrofrontend;
