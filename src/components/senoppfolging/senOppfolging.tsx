import { MikrofrontendLinkPanel } from "../panels/MikrofrontendLinkPanel";
import dayjs from "dayjs";
import React from "react";
import { SenOppfolgingStatusDTO } from "../../schema/merOppfolgingStatusSchema";
import { sspsUrl } from "../../api/urls";

interface Props {
  status: SenOppfolgingStatusDTO;
}

export const SenOppfolging = ({ status }: Props) => {
  const datePattern = "DD.MM.YYYY";

  if (status.responseStatus == "NO_RESPONSE") {
    const maxDateText =
      status.maxDate != null
        ? `${status.maxDate} er din siste dag med sykepenger.`
        : `Det nærmer seg siste dag du kan motta sykepenger.`;

    return (
      <MikrofrontendLinkPanel
        url={sspsUrl}
        headingText="Snart slutt på sykepengene"
        bodyText={`${maxDateText} Vi ber deg derfor vurdere situasjonen din.`}
        alertStyle="info"
        tag={{ variant: "warning-moderate", text: "Du har ikke svart" }}
      />
    );
  } else {
    if (!status.responseDateTime) {
      return <></>;
    }

    const responseDate = dayjs(status.responseDateTime);
    const oneWeekAgo = dayjs().subtract(1, "week");

    const isResponseDateLessThanAWeekAgo = oneWeekAgo.isBefore(responseDate);

    if (isResponseDateLessThanAWeekAgo) {
      if (status.responseStatus === "TRENGER_OPPFOLGING") {
        return (
          <MikrofrontendLinkPanel
            url={sspsUrl}
            headingText="Snart slutt på sykepengene"
            bodyText="Du har svart at du ønsker oppfølging. Du får beskjed når vi har vurdert behovet ditt."
            alertStyle="info"
            tag={{ variant: "success-moderate", text: `Du svarte den ${responseDate.format(datePattern)}` }}
          />
        );
      } else if (status.responseStatus === "TRENGER_IKKE_OPPFOLGING") {
        return (
          <MikrofrontendLinkPanel
            url={sspsUrl}
            headingText="Snart slutt på sykepengene"
            bodyText="Du har svart at du ikke trenger oppfølging nå. Ta kontakt hvis situasjonen din endrer seg."
            alertStyle="info"
            tag={{ variant: "success-moderate", text: `Du svarte den  ${responseDate.format(datePattern)}` }}
          />
        );
      }
    }

    // Hide microfrontend when responded more than one week ago
    return <></>;
  }
};
