import React from "react";
import { Fetcher } from "swr";
import { AktivitetskravVurdering } from "./schema/aktivitetskravVurderingSchema";
import { get } from "./api/api";
import useSWRImmutable from "swr/immutable";
import { aktivitetskravApiUrl } from "./api/urls";
import { ForhaandsvarselPanel } from "./components/panels/ForhaandsvarselPanel";

function App() {
  const fetchAktivitetskravVurdering: Fetcher<AktivitetskravVurdering, string> = (path) => get(path);
  const aktivitetskravResponse = useSWRImmutable(aktivitetskravApiUrl, fetchAktivitetskravVurdering);

  if (aktivitetskravResponse.data) {
    switch (aktivitetskravResponse.data.status) {
      case "NY":
        return <div>Ny: Infoside-info og lenke</div>;
      case "AVVENT":
        return <div>Avvent</div>;
      case "UNNTAK":
        return <div>UNNTAK</div>;
      case "OPPFYLT":
        return <div>OPPFYLT</div>;
      case "FORHANDSVARSEL":
        return <ForhaandsvarselPanel />;
      case "STANS":
        return <div>STANS</div>;
      case "IKKE_OPPFYLT":
        return <div>IKKE_OPPFYLT</div>;
      case "IKKE_AKTUELL":
        return <div>IKKE_AKTUELL</div>;
      case "LUKKET":
        return <div>LUKKET</div>;
    }
  }

  return null;
}

export default App;
