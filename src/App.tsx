import React from "react";
import { ForhaandsvarselPanel } from "./components/panels/ForhaandsvarselPanel";
import { Fetcher } from "swr";
import { AktivitetskravVurdering } from "./schema/aktivitetskravVurderingSchema";
import useSWRImmutable from "swr/immutable";
import { UnderArbeidPanel } from "./components/panels/UnderArbeidPanel";
import { UnntakPanel } from "./components/panels/UnntakPanel";
import { OppfyltPanel } from "./components/panels/OppfyltPanel";
import { IkkeAktuellPanel } from "./components/panels/IkkeAktuellPanel";
import { get } from "./api/api";
import { proxyApiUrl } from "./api/urls";

function App() {
  const fetchAktivitetskravVurdering: Fetcher<AktivitetskravVurdering, string> = (path) => get(path);
  const { data, error } = useSWRImmutable(proxyApiUrl, fetchAktivitetskravVurdering);

  if (error) {
    throw error;
  }

  if (data) {
    switch (data.status) {
      case "NY":
      case "AVVENTER":
        return <UnderArbeidPanel />;
      case "UNNTAK":
        return <UnntakPanel arsak={data.arsaker[0]} sistVurdert={data.sistVurdert} />;
      case "OPPFYLT":
        return <OppfyltPanel arsak={data.arsaker[0]} sistVurdert={data.sistVurdert} />;
      case "FORHANDSVARSEL":
        return <ForhaandsvarselPanel journalpostId={data.journalpostId} fristDato={data.fristDato} />;
      case "IKKE_AKTUELL":
        return <IkkeAktuellPanel sistVurdert={data.sistVurdert} />;
    }
  }

  return null;
}

export default App;
