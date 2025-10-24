import React, { ReactElement } from "react";
import { MikrofrontendLinkPanel } from "../panels/MikrofrontendLinkPanel";
import dayjs from "dayjs";
import { KartleggingStatusDTO } from "../../schema/merOppfolgingStatusSchema";
import { karleggingUrl } from "../../api/urls";

interface KartleggingsspormalProps {
  kartleggingStatus: KartleggingStatusDTO;
}

export const Kartleggingsspormal = ({ kartleggingStatus }: KartleggingsspormalProps): ReactElement => {
  if (kartleggingStatus.responseStatus === "SUBMITTED") {
    const datePattern = "DD.MM.YYYY";
    const responseDate = dayjs(kartleggingStatus.responseDateTime, datePattern);

    return (
      <MikrofrontendLinkPanel
        url={karleggingUrl}
        headingText="Kartlegging av din situasjon"
        bodyText="Se svarene du har sendt til Nav."
        alertStyle="info"
        tag={{ variant: "success-moderate", text: `Du svarte den ${responseDate.format(datePattern)}` }}
      />
    );
  }

  return (
    <MikrofrontendLinkPanel
      url={karleggingUrl}
      headingText="Kartlegging av din situasjon"
      bodyText="Vi ber deg svare på tre spørsmål om ditt sykefravær."
      alertStyle="info"
      tag={{ variant: "warning-moderate", text: "Du har ikke svart" }}
    />
  );
};
