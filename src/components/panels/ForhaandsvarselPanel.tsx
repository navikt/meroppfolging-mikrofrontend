import React from "react";
import { MikrofrontendLinkPanel } from "./common/MikrofrontendLinkPanel";
import { journalpostPageUrl } from "../../api/urls";
import { MikrofrontendPanel } from "./common/MikrofrontendPanel";

interface Props {
  journalpostId?: string;
}

export const ForhaandsvarselPanel = ({ journalpostId }: Props) => {
  if (!journalpostId) {
    return (
      //Skal normalt ikke skje, men for å ha en fallback dersom journalføring gikk galt eller noe.
      <MikrofrontendPanel
        headingText="Mulig stans av sykepenger"
        bodyText="NAV vurderer at du ikke kan unntas aktivitetsplikten. Du vil motta et brev om dette i Mine Saker"
        alertStyle="error"
      />
    );
  }

  return (
    <MikrofrontendLinkPanel
      href={journalpostPageUrl(journalpostId)}
      headingText="Mulig stans av sykepenger"
      bodyText="NAV vurderer at du ikke kan unntas aktivitetsplikten"
      alertStyle="error"
    />
  );
};
