import React from "react";
import { VurderingArsak } from "../../schema/aktivitetskravVurderingSchema";
import { MikrofrontendPanel } from "./common/MikrofrontendPanel";

interface Props {
  arsak: VurderingArsak;
}

const getBegrunnelseText = (arsak: VurderingArsak) => {
  switch (arsak) {
    case "MEDISINSKE_GRUNNER":
      return "NAV vurderer at du er unntatt fra aktivitetsplikten på grunn av medisinske opplysninger";
    case "TILRETTELEGGING_IKKE_MULIG":
      return "NAV vurderer at du er unntatt fra aktivitetsplikten da tilrettelegging på arbeidsplassen ikke er mulig";
    case "SJOMENN_UTENRIKS":
      return "NAV vurderer at du er unntatt fra aktivitetsplikten";
    default:
      return null;
  }
};

export const UnntakPanel = ({ arsak }: Props) => {
  const begrunnelseText = getBegrunnelseText(arsak);

  if (!begrunnelseText) {
    //bør kanskje logge feil også, skal ikke kunne skje
    return null;
  }

  return (
    <MikrofrontendPanel headingText="Unntak fra aktivitetsplikten" bodyText={begrunnelseText} alertStyle="success" />
  );
};
