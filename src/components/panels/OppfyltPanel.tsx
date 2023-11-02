import React from "react";
import { OppfyltArsaker } from "../../schema/aktivitetskravVurderingSchema";
import { MikrofrontendPanel } from "./common/MikrofrontendPanel";
import { getShortDateFormat } from "../../utils/dateUtils";

interface Props {
  arsak: OppfyltArsaker;
  sistVurdert: string;
}

const getBegrunnelseText = (arsak: OppfyltArsaker) => {
  switch (arsak) {
    case "FRISKMELDT":
      return "NAV vurderer at du oppfyller aktivitetsplikten siden du er friskmeldt";
    case "GRADERT":
      return "NAV vurderer at du oppfyller aktivitetsplikten siden du er i gradert arbeid";
    case "TILTAK":
      return "NAV vurderer at du oppfyller aktivitetsplikten siden du er i tiltak";
  }
};

export const OppfyltPanel = ({ arsak, sistVurdert }: Props) => {
  const begrunnelseText = getBegrunnelseText(arsak);

  return (
    <MikrofrontendPanel
      headingText="NAV har vurdert aktivitetsplikten din"
      bodyText={begrunnelseText}
      alertStyle="success"
      tag={{
        variant: "success-moderate",
        text: `Dato for vurdering: ${getShortDateFormat(sistVurdert)}`,
      }}
    />
  );
};
