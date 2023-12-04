import { logAmplitudeEvent } from "@navikt/nav-dekoratoren-moduler";
import { getEnvironment } from "../api/urls";

const timeout = (ms: number) => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Slow response from Amplitude"));
    }, ms);
  });
};

export const logEvent = async (event: string, data?: Record<string, string>) => {
  if (getEnvironment() === "local") {
    console.log("Amplitude event: " + event);
    if (data) {
      console.table(data);
    }
  } else {
    //Makstid på å logge event
    await Promise.race([
      timeout(1000),
      logAmplitudeEvent({
        origin: "aktivitetskrav-mikrofrontend",
        eventName: event, // Event-navn (påkrevd)
        eventData: data, // Event-data objekt (valgfri)
      }),
    ]);
  }
};
