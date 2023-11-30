import React from "react";
import { MikrofrontendLinkPanel, TagMeta } from "./common/MikrofrontendLinkPanel";
import { getShortDateFormat } from "../../utils/dateUtils";
import { vurdererHeadingText } from "../../commonTexts";
import { UnderArbeidPanel } from "./UnderArbeidPanel";

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
      //vi har ikke mottatt all info fra isyfo enda, så viser mellomtilstand.
      <UnderArbeidPanel />
    );
  }

  return (
    <MikrofrontendLinkPanel
      headingText={vurdererHeadingText}
      bodyText="NAV vurderer å stanse sykepengene dine"
      alertStyle="warning"
      tag={tagInfo}
    />
  );
};
