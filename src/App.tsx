import React from "react";
import { ForhaandsvarselPanel } from "./components/panels/ForhaandsvarselPanel";
import { subtractDaysFromDate } from "./utils/dateUtils";

function App() {
  return <ForhaandsvarselPanel journalpostId="123" fristDato={subtractDaysFromDate(new Date(), 14).toISOString()} />;

  // const fetchAktivitetskravVurdering: Fetcher<AktivitetskravVurdering, string> = (path) => get(path);
  // const aktivitetskravResponse = useSWRImmutable(aktivitetskravApiUrl, fetchAktivitetskravVurdering);
  //
  // if (aktivitetskravResponse.data) {
  //   switch (aktivitetskravResponse.data.status) {
  //     case "NY":
  //       return <UnderArbeidPanel />;
  //     case "UNNTAK":
  //       return (
  //         <UnntakPanel
  //           arsak={aktivitetskravResponse.data.arsaker}
  //           sistVurdert={aktivitetskravResponse.data.sistVurdert}
  //         />
  //       );
  //     case "OPPFYLT":
  //       return (
  //         <OppfyltPanel
  //           arsak={aktivitetskravResponse.data.arsaker}
  //           sistVurdert={aktivitetskravResponse.data.sistVurdert}
  //         />
  //       );
  //     case "FORHANDSVARSEL":
  //       return (
  //         <ForhaandsvarselPanel
  //           journalpostId={aktivitetskravResponse.data.journalpostId}
  //           fristDato={aktivitetskravResponse.data.fristDato}
  //         />
  //       );
  //     case "IKKE_AKTUELL":
  //       return <IkkeAktuellPanel sistVurdert={aktivitetskravResponse.data.sistVurdert} />;
  //   }
  // }
  //
  // return null;
}

export default App;
