import React from "react";
import { getShortDateFormat } from "../../utils/dateUtils";
import { harVurdertHeadingText } from "../../commonTexts";
import { MikrofrontendLinkPanel } from "./common/MikrofrontendLinkPanel";

interface Props {
  sistVurdert: string;
}

export const IkkeAktuellPanel = ({ sistVurdert }: Props) => {
  return (
    <MikrofrontendLinkPanel
      headingText={harVurdertHeadingText}
      bodyText="NAV vurderer at aktivitetsplikten ikke er aktuell for deg"
      alertStyle="info"
      tag={{
        variant: "info-moderate",
        text: `Dato for vurdering: ${getShortDateFormat(sistVurdert)}`,
      }}
    />
  );
};
