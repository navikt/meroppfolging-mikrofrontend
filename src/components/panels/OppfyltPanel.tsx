import React from "react";
import { VurderingArsak } from "../../schema/aktivitetskravVurderingSchema";
import { MikrofrontendPanel } from "./common/MikrofrontendPanel";

interface Props {
  arsak: VurderingArsak;
}

const getBegrunnelseText = (arsak: VurderingArsak) => {
  switch (arsak) {
    case "FRISKMELDT":
      return "NAV vurderer at du oppfyller aktivitetsplikten siden du er friskmeldt";
    case "GRADERT":
      return "NAV vurderer at du oppfyller aktivitetsplikten siden du er i gradert arbeid";
    case "TILTAK":
      return "NAV vurderer at du oppfyller aktivitetsplikten siden du har gjort nødvendige tiltak";
    default:
      return null;
  }
};

export const OppfyltPanel = ({ arsak }: Props) => {
  const begrunnelseText = getBegrunnelseText(arsak);

  if (!begrunnelseText) {
    //bør kanskje logge feil også, skal ikke kunne skje
    return null;
  }

  return (
    <MikrofrontendPanel headingText="Aktivitetsplikten er oppfylt" bodyText={begrunnelseText} alertStyle="success" />
  );
};
