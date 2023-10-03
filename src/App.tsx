import React from "react";
import { ForhaandsvarselPanel } from "./components/panels/ForhaandsvarselPanel";
import { Fetcher } from "swr";
import { AktivitetskravVurdering } from "./schema/aktivitetskravVurderingSchema";
import useSWRImmutable from "swr/immutable";
import { aktivitetskravApiUrl } from "./api/urls";
import { UnderArbeidPanel } from "./components/panels/UnderArbeidPanel";
import { UnntakPanel } from "./components/panels/UnntakPanel";
import { OppfyltPanel } from "./components/panels/OppfyltPanel";
import { IkkeAktuellPanel } from "./components/panels/IkkeAktuellPanel";
import { get } from "./api/api";

function App() {
  const fetchAktivitetskravVurdering: Fetcher<AktivitetskravVurdering, string> = (path) => get(path);
  const aktivitetskravResponse = useSWRImmutable(aktivitetskravApiUrl, fetchAktivitetskravVurdering);

  if (aktivitetskravResponse.data) {
    switch (aktivitetskravResponse.data.status) {
      case "NY":
        return <UnderArbeidPanel />;
      case "UNNTAK":
        return (
          <UnntakPanel
            arsak={aktivitetskravResponse.data.arsaker}
            sistVurdert={aktivitetskravResponse.data.sistVurdert}
          />
        );
      case "OPPFYLT":
        return (
          <OppfyltPanel
            arsak={aktivitetskravResponse.data.arsaker}
            sistVurdert={aktivitetskravResponse.data.sistVurdert}
          />
        );
      case "FORHANDSVARSEL":
        return (
          <ForhaandsvarselPanel
            journalpostId={aktivitetskravResponse.data.journalpostId}
            fristDato={aktivitetskravResponse.data.fristDato}
          />
        );
      case "IKKE_AKTUELL":
        return <IkkeAktuellPanel sistVurdert={aktivitetskravResponse.data.sistVurdert} />;
    }
  }

  return null;
}

export default App;
