import useSWRImmutable from "swr/immutable";
import { get } from "./api/api";
import { meroppfolgingApiUrl } from "./api/urls";
import { Fetcher } from "swr";
import React from "react";
import { MerOppfolgingStatusDTO } from "./schema/merOppfolgingStatusSchema";
import { SenOppfolging } from "./components/senoppfolging/senOppfolging";
import { Kartleggingsspormal } from "./components/kartleggingsspormal/kartleggingsspormal";

const noMicroFrontend = <></>;

function App() {
  const fetchMerOppfolgingStatus: Fetcher<MerOppfolgingStatusDTO, string> = (path) => get(path);
  const { data, error } = useSWRImmutable(meroppfolgingApiUrl, fetchMerOppfolgingStatus);

  if (error) throw error;

  if (data) {
    switch (data.oppfolgingsType) {
      case "INGEN_OPPFOLGING":
        return noMicroFrontend;
      case "KARTLEGGING":
        return <Kartleggingsspormal kartleggingStatus={data.kartleggingStatus} />;
      case "SEN_OPPFOLGING":
        return <SenOppfolging status={data.senOppfolgingStatus} />;
      default:
        return noMicroFrontend;
    }
  }
}

export default App;
