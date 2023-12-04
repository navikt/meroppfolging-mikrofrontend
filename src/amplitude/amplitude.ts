import { logAmplitudeEvent } from "@navikt/nav-dekoratoren-moduler";
import { getEnvironment } from "../api/urls";

const maxAmplitudeTimeLimit = () => {
  return new Promise(() => {
    setTimeout(() => {
      return Promise.reject(new Error("Amplitude event timeout"));
    }, 1000);
  });
};

export const logEvent = async (event: string, data?: Record<string, string>) => {
  if (getEnvironment() === "local") {
    console.log("Amplitude event: " + event);
    if (data) {
      console.table(data);
    }
  } else {
    try {
      await Promise.race([
        maxAmplitudeTimeLimit(),
        logAmplitudeEvent({
          origin: "aktivitetskrav-mikrofrontend",
          eventName: event, // Event-navn (påkrevd)
          eventData: data, // Event-data objekt (valgfri)
        }),
      ]);
    } catch (e) {
      return Promise.resolve();
    }
  }
};
