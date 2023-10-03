import React from "react";
import { MikrofrontendLinkPanel } from "./common/MikrofrontendLinkPanel";
import { journalpostPageUrl } from "../../api/urls";
import { MikrofrontendPanel } from "./common/MikrofrontendPanel";
import { getShortDateFormat } from "../../utils/dateUtils";

interface Props {
  journalpostId?: string;
  fristDato: string;
}

export const ForhaandsvarselPanel = ({ journalpostId, fristDato }: Props) => {
  if (!journalpostId) {
    return (
      //Skal normalt ikke skje, men for å ha en fallback dersom journalføring gikk galt eller noe.
      <MikrofrontendPanel
        headingText="Mulig stans av sykepenger"
        bodyText={`NAV vurderer å stanse sykepengene dine. Du vil motta et brev om dette i Mine Saker`}
        alertStyle="error"
        tag={{
          variant: "error-moderate",
          text: `Svarfrist: ${getShortDateFormat(fristDato)}`,
        }}
      />
    );
  }

  return (
    <MikrofrontendLinkPanel
      href={journalpostPageUrl(journalpostId)}
      headingText="Mulig stans av sykepenger"
      bodyText="NAV vurderer å stanse sykepengene dine"
      alertStyle="error"
      tag={{
        variant: "error-moderate",
        text: `Svarfrist: ${getShortDateFormat(fristDato)}`,
      }}
    />
  );
};
