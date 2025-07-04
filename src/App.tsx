import useSWRImmutable from "swr/immutable";
import { get } from "./api/api";
import { meroppfolgingApiUrl } from "./api/urls";
import { Fetcher } from "swr";
import React from "react";
import { SenOppfolgingStatusDTO } from "./schema/senOppfolgingStatusSchema";
import { MikrofrontendLinkPanel } from "./components/panels/MikrofrontendLinkPanel";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

const noMicroFrontend = <></>;

function App() {
  const fetchSenOppfolgingStatus: Fetcher<SenOppfolgingStatusDTO, string> = (path) => get(path);
  const { data, error } = useSWRImmutable(meroppfolgingApiUrl, fetchSenOppfolgingStatus);
  const datePattern = "DD.MM.YYYY";

  if (error) throw error;

  if (data) {
    if (!data.hasAccessToSenOppfolging) {
      return noMicroFrontend;
    }
    if (data.responseStatus == "NO_RESPONSE") {
      const maxDateText =
        data.maxDate != null
          ? `${data.maxDate} er din siste dag med sykepenger.`
          : `Det nærmer seg siste dag du kan motta sykepenger.`;

      return (
        <MikrofrontendLinkPanel
          headingText="Snart slutt på sykepengene"
          bodyText={`${maxDateText} Vi ber deg derfor vurdere situasjonen din.`}
          alertStyle="info"
          tag={{ variant: "warning-moderate", text: "Du har ikke svart" }}
        />
      );
    } else {
      // Is pilot and has responded

      if (!data.responseTime) {
        return noMicroFrontend;
      }

      dayjs.extend(customParseFormat);
      const responseDate = dayjs(data.responseTime, datePattern);
      const oneWeekAgo = dayjs().subtract(1, "week");

      const isResponseDateLessThanAWeekAgo = oneWeekAgo.isBefore(responseDate);

      if (isResponseDateLessThanAWeekAgo) {
        if (data.responseStatus === "TRENGER_OPPFOLGING") {
          return (
            <MikrofrontendLinkPanel
              headingText="Snart slutt på sykepengene"
              bodyText="Du har svart at du ønsker oppfølging. Du får beskjed når vi har vurdert behovet ditt."
              alertStyle="info"
              tag={{ variant: "success-moderate", text: `Du svarte den ${responseDate.format(datePattern)}` }}
            />
          );
        } else if (data.responseStatus === "TRENGER_IKKE_OPPFOLGING") {
          return (
            <MikrofrontendLinkPanel
              headingText="Snart slutt på sykepengene"
              bodyText="Du har svart at du ikke trenger oppfølging nå. Ta kontakt hvis situasjonen din endrer seg."
              alertStyle="info"
              tag={{ variant: "success-moderate", text: `Du svarte den  ${responseDate.format(datePattern)}` }}
            />
          );
        }
      }

      // Hide microfrontend when responded more than one week ago
      return noMicroFrontend;
    }
  } else {
    return null;
  }
}

export default App;
