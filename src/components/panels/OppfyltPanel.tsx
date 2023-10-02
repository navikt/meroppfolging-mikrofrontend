import React from "react";
import { OppfyltArsaker } from "../../schema/aktivitetskravVurderingSchema";
import { MikrofrontendPanel } from "./common/MikrofrontendPanel";

interface Props {
  arsak: OppfyltArsaker;
}

const getBegrunnelseText = (arsak: OppfyltArsaker) => {
  switch (arsak) {
    case "FRISKMELDT":
      return "NAV vurderer at du oppfyller aktivitetsplikten siden du er friskmeldt";
    case "GRADERT":
      return "NAV vurderer at du oppfyller aktivitetsplikten siden du er i gradert arbeid";
    case "TILTAK":
      return "NAV vurderer at du oppfyller aktivitetsplikten siden du har gjort nødvendige tiltak";
  }
};

export const OppfyltPanel = ({ arsak }: Props) => {
  return (
    <MikrofrontendPanel
      headingText="Aktivitetsplikten er oppfylt"
      bodyText={getBegrunnelseText(arsak)}
      alertStyle="success"
    />
  );
};
