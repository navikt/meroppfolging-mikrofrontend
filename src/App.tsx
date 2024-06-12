import useSWRImmutable from "swr/immutable";
import { get } from "./api/api";
import { meroppfolgingApiUrl } from "./api/urls";
import { Fetcher } from "swr";
import React from "react";
import { SenOppfolgingStatusDTO } from "./schema/senOppfolgingStatusSchema";
import { MikrofrontendLinkPanel } from "./components/panels/MikrofrontendLinkPanel";

function App() {
  const fetchSenOppfolgingStatus: Fetcher<SenOppfolgingStatusDTO, string> = (path) => get(path);
  const { data, error } = useSWRImmutable(meroppfolgingApiUrl, fetchSenOppfolgingStatus);

  if (error) throw error;

  if (data && data.isPilot === true && data.responseStatus == "NO_RESPONSE") {
    const maxDateText =
      data.maxDate != null
        ? `Den ${data.maxDate} er datoen du ikke lenger vil motta sykepenger (maksdato).`
        : `Det nærmer seg datoen du ikke lenger vil motta sykepenger.`;

    return (
      <MikrofrontendLinkPanel
        headingText="Snart slutt på sykepengene"
        bodyText={`${maxDateText} Vi trenger derfor at du svarer på to spørsmål om situasjonen du står i så vi kan hjelpe deg.`}
        alertStyle="warning"
        tag={{ variant: "warning-moderate", text: "Du har ikke svart" }}
      />
    );
  } else if (data && data.isPilot === true && data.responseStatus == "TRENGER_OPPFOLGING") {
    return (
      <MikrofrontendLinkPanel
        headingText="Snart slutt på sykepengene"
        bodyText="Du har svart at du har behov for hjelp fra NAV. En veileder vil ta kontakt med deg."
        alertStyle="info"
        tag={{ variant: "success-moderate", text: `Du svarte den ${data.responseTime}` }}
      />
    );
  } else if (data && data.isPilot === true && data.responseStatus == "TRENGER_IKKE_OPPFOLGING") {
    return (
      <MikrofrontendLinkPanel
        headingText="Snart slutt på sykepengene"
        bodyText="Du har svart at du ikke har behov for hjelp fra NAV. Ta kontakt hvis situasjonen din endrer seg."
        alertStyle="info"
        tag={{ variant: "success-moderate", text: `Du svarte den  ${data.responseTime}` }}
      />
    );
  } else {
    return (
      <MikrofrontendLinkPanel
        headingText="Snart slutt på sykepengene"
        bodyText="Du må ta stilling til hva du skal gjøre i god tid før sykepengene tar slutt"
        alertStyle="warning"
        tag={{ variant: "warning-moderate", text: "Les mer om dine muligheter fremover" }}
      />
    );
  }
}

export default App;
