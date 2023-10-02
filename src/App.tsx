import React from "react";
import { ForhaandsvarselPanel } from "./components/panels/ForhaandsvarselPanel";

function App() {
  return <ForhaandsvarselPanel journalpostId={"12345"} />;

  // const fetchAktivitetskravVurdering: Fetcher<AktivitetskravVurdering, string> = (path) => get(path);
  // const aktivitetskravResponse = useSWRImmutable(aktivitetskravApiUrl, fetchAktivitetskravVurdering);
  //
  // if (aktivitetskravResponse.data) {
  //   switch (aktivitetskravResponse.data.status) {
  //     case "NY":
  //       return <UnderArbeidPanel />;
  //     case "AVVENT":
  //       return <UnderArbeidPanel />;
  //     case "UNNTAK":
  //       return <UnntakPanel arsak={aktivitetskravResponse.data.arsaker} />;
  //     case "OPPFYLT":
  //       return <OppfyltPanel arsak={aktivitetskravResponse.data.arsaker} />;
  //     case "FORHANDSVARSEL":
  //       return <ForhaandsvarselPanel journalpostId={aktivitetskravResponse.data.journalpostId} />;
  //     case "IKKE_OPPFYLT":
  //       return <IkkeOppfyltPanel />;
  //     case "IKKE_AKTUELL":
  //       return <IkkeAktuellPanel />;
  //   }
  // }
  //
  // return null;
}

export default App;
