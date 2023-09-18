import { logAmplitudeEvent } from "@navikt/nav-dekoratoren-moduler";

export const logEvent = (event: string, data?: Record<string, string>) => {
  if (process.env.NODE_ENV === "development") {
    console.log("Amplitude event: " + event);
    if (data) {
      console.table(data);
    }
  }

  logAmplitudeEvent({
    origin: "aktivitetskrav-mikrofrontend",
    eventName: event, // Event-navn (påkrevd)
    eventData: data, // Event-data objekt (valgfri)
  });
};
