import { logAmplitudeEvent } from "@navikt/nav-dekoratoren-moduler";
import { getEnvironment } from "../api/urls";

const maxAmplitudeTimeLimit = (ms: number) => {
  return new Promise(() => {
    setTimeout(() => {
      return Promise.resolve();
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
    await Promise.race([
      maxAmplitudeTimeLimit(1000),
      logAmplitudeEvent({
        origin: "aktivitetskrav-mikrofrontend",
        eventName: event, // Event-navn (påkrevd)
        eventData: data, // Event-data objekt (valgfri)
      }),
    ]);
  }
};
