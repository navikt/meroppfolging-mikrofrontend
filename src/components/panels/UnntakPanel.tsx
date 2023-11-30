import React from "react";
import { UnntakArsaker } from "../../schema/aktivitetskravVurderingSchema";
import { getShortDateFormat } from "../../utils/dateUtils";
import { harVurdertHeadingText } from "../../commonTexts";
import { MikrofrontendLinkPanel } from "./common/MikrofrontendLinkPanel";

interface Props {
  arsak: UnntakArsaker;
  sistVurdert: string;
}

const getBegrunnelseText = (arsak: UnntakArsaker) => {
  switch (arsak) {
    case "MEDISINSKE_GRUNNER":
      return "Du er unntatt fra aktivitetsplikten på grunn av medisinske opplysninger";
    case "TILRETTELEGGING_IKKE_MULIG":
      return "Du er unntatt fra aktivitetsplikten da tilrettelegging på arbeidsplassen ikke er mulig";
    case "SJOMENN_UTENRIKS":
      return "NAV vurderer at du er unntatt fra aktivitetsplikten";
  }
};

export const UnntakPanel = ({ arsak, sistVurdert }: Props) => {
  const begrunnelseText = getBegrunnelseText(arsak);

  return (
    <MikrofrontendLinkPanel
      headingText={harVurdertHeadingText}
      bodyText={begrunnelseText}
      alertStyle="success"
      tag={{
        variant: "success-moderate",
        text: `Dato for vurdering: ${getShortDateFormat(sistVurdert)}`,
      }}
    />
  );
};
