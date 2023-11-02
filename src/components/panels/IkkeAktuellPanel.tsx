import React from "react";
import { MikrofrontendPanel } from "./common/MikrofrontendPanel";
import { getShortDateFormat } from "../../utils/dateUtils";
import { harVurdertHeadingText } from "../../commonTexts";

interface Props {
  sistVurdert: string;
}

export const IkkeAktuellPanel = ({ sistVurdert }: Props) => {
  return (
    <MikrofrontendPanel
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
