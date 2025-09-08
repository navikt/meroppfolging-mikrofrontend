import React, { ReactElement } from "react";
import { MikrofrontendLinkPanel } from "../panels/MikrofrontendLinkPanel";
import dayjs from "dayjs";
import { KartleggingStatusDTO } from "../../schema/merOppfolgingStatusSchema";

interface KartleggingsspormalProps {
  kartleggingStatus: KartleggingStatusDTO;
}

export const Kartleggingsspormal = ({ kartleggingStatus }: KartleggingsspormalProps): ReactElement => {
  if (kartleggingStatus.responseStatus === "SUBMITTED") {
    const datePattern = "DD.MM.YYYY";
    const responseDate = dayjs(kartleggingStatus.responseTime, datePattern);

    return (
      <MikrofrontendLinkPanel
        headingText="Kartlegging av oppfølgingsbehov"
        bodyText="Du har sendt inn svar om din situasjon til ditt Nav-kontor."
        alertStyle="info"
        tag={{ variant: "success-moderate", text: `Du svarte den ${responseDate.format(datePattern)}` }}
      />
    );
  }

  return (
    <MikrofrontendLinkPanel
      headingText="Kartlegging av oppfølgingsbehov"
      bodyText="Vi ber deg svare på tre korte spørsmål om din situasjon."
      alertStyle="info"
      tag={{ variant: "warning-moderate", text: "Du har ikke svart" }}
    />
  );
};
