import React from "react";
import { MikrofrontendLinkPanel } from "./common/MikrofrontendLinkPanel";
import { journalpostPageUrl } from "../../api/urls";
import { MikrofrontendPanel, TagMeta } from "./common/MikrofrontendPanel";
import { getShortDateFormat } from "../../utils/dateUtils";

interface Props {
  journalpostId?: string;
  fristDato: string;
}

export const ForhaandsvarselPanel = ({ journalpostId, fristDato }: Props) => {
  const tagInfo: TagMeta | undefined = fristDato
    ? {
        variant: new Date() > new Date(fristDato) ? "error-moderate" : "warning-moderate",
        text: `Svarfrist: ${getShortDateFormat(fristDato)}`,
      }
    : undefined;

  if (!journalpostId) {
    return (
      //Skal normalt ikke skje, men for å ha en fallback dersom journalføring gikk galt eller noe.
      <MikrofrontendPanel
        headingText="NAV vurderer aktivitetsplikten din"
        bodyText={`NAV vurderer å stanse sykepengene dine. Du vil motta et brev om dette i Mine Saker`}
        alertStyle="warning"
        tag={tagInfo}
      />
    );
  }

  return (
    <MikrofrontendLinkPanel
      href={journalpostPageUrl(journalpostId)}
      headingText="NAV vurderer aktivitetsplikten din"
      bodyText="NAV vurderer å stanse sykepengene dine"
      alertStyle="warning"
      tag={tagInfo}
    />
  );
};
