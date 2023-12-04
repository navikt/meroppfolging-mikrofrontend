import { logAmplitudeEvent } from "@navikt/nav-dekoratoren-moduler";
import { getEnvironment } from "../api/urls";

function wait(ms: number) {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error("Amplitude maxlimit timeout")), ms);
  });
}

export const logEvent = async (event: string, data?: Record<string, string>) => {
  if (getEnvironment() === "local") {
    console.log("Amplitude event: " + event);
    if (data) {
      console.table(data);
    }
  } else {
    try {
      await Promise.race([
        wait(1000),
        async () =>
          await logAmplitudeEvent({
            origin: "aktivitetskrav-mikrofrontend",
            eventName: event, // Event-navn (påkrevd)
            eventData: data, // Event-data objekt (valgfri)
          }),
      ]);
    } catch (err) {
      console.log(err);
    }
  }
};
