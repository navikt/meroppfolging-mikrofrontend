import React from "react";
import { Fetcher } from "swr";
import { AktivitetskravVurdering } from "./schema/aktivitetskravVurderingSchema";
import { get } from "./api/api";
import useSWRImmutable from "swr/immutable";
import { aktivitetskravApiUrl } from "./api/urls";
import { ForhaandsvarselPanel } from "./components/panels/ForhaandsvarselPanel";
import { UnderArbeidPanel } from "./components/panels/UnderArbeidPanel";
import { UnntakPanel } from "./components/panels/UnntakPanel";
import { OppfyltPanel } from "./components/panels/OppfyltPanel";
import { IkkeOppfyltPanel } from "./components/panels/IkkeOppfyltPanel";
import { IkkeAktuellPanel } from "./components/panels/IkkeAktuellPanel";

function App() {
  const fetchAktivitetskravVurdering: Fetcher<AktivitetskravVurdering, string> = (path) => get(path);
  const aktivitetskravResponse = useSWRImmutable(aktivitetskravApiUrl, fetchAktivitetskravVurdering);

  if (aktivitetskravResponse.data) {
    switch (aktivitetskravResponse.data.status) {
      case "NY":
        return <UnderArbeidPanel />;
      case "AVVENT":
        return <UnderArbeidPanel />;
      case "UNNTAK":
        return <UnntakPanel arsak={aktivitetskravResponse.data.arsaker} />;
      case "OPPFYLT":
        return <OppfyltPanel arsak={aktivitetskravResponse.data.arsaker} />;
      case "FORHANDSVARSEL":
        return <ForhaandsvarselPanel journalpostId={aktivitetskravResponse.data.journalpostId} />;
      case "IKKE_OPPFYLT":
        return <IkkeOppfyltPanel />;
      case "IKKE_AKTUELL":
        return <IkkeAktuellPanel />;
    }
  }

  return null;
}

export default App;
