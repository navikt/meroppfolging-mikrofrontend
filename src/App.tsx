import React from "react";
import { Fetcher } from "swr";
import { AktivitetskravVurdering } from "./schema/aktivitetskravVurderingSchema";
import { get } from "./api/api";
import useSWRImmutable from "swr/immutable";
import { aktivitetskravApiUrl } from "./api/urls";
import { ForhaandsvarselPanel } from "./components/panels/ForhaandsvarselPanel";
import { InfoPanel } from "./components/panels/InfoPanel";
import { UnderArbeidPanel } from "./components/panels/UnderArbeidPanel";
import { UnntakPanel } from "./components/panels/UnntakPanel";
import { OppfyltPanel } from "./components/panels/OppfyltPanel";
import { StansPanel } from "./components/panels/StansPanel";
import { IkkeAktuellPanel } from "./components/panels/IkkeAktuellPanel";

function App() {
  const fetchAktivitetskravVurdering: Fetcher<AktivitetskravVurdering, string> = (path) => get(path);
  const aktivitetskravResponse = useSWRImmutable(aktivitetskravApiUrl, fetchAktivitetskravVurdering);

  if (aktivitetskravResponse.data) {
    switch (aktivitetskravResponse.data.status) {
      case "NY":
        return <InfoPanel />;
      case "AVVENT":
        return <UnderArbeidPanel />;
      case "UNNTAK":
        return <UnntakPanel arsak={aktivitetskravResponse.data.arsaker[0]} />;
      case "OPPFYLT":
        return <OppfyltPanel arsak={aktivitetskravResponse.data.arsaker[0]} />;
      case "FORHANDSVARSEL":
        return <ForhaandsvarselPanel />;
      case "STANS":
        return <StansPanel />;
      case "IKKE_AKTUELL":
        return <IkkeAktuellPanel />;
    }
  }

  return null;
}

export default App;
