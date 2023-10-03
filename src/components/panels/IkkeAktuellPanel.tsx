import React from "react";
import { MikrofrontendPanel } from "./common/MikrofrontendPanel";
import { getShortDateFormat } from "../../utils/dateUtils";

interface Props {
  sistVurdert: string;
}

export const IkkeAktuellPanel = ({ sistVurdert }: Props) => {
  return (
    <MikrofrontendPanel
      headingText="Aktivitetsplikten er ikke relevant for deg"
      bodyText="NAV vurderer at aktivitetsplikten ikke er aktuell for deg"
      alertStyle="info"
      tag={{
        variant: "info-moderate",
        text: `Dato for vurdering: ${getShortDateFormat(sistVurdert)}`,
      }}
    />
  );
};
