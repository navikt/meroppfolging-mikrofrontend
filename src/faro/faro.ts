import { Faro, getWebInstrumentations, initializeFaro } from "@grafana/faro-web-sdk";
import { TracingInstrumentation } from "@grafana/faro-web-tracing";
import { faroTelemetryUrl, getEnvironment } from "../api/urls";

// eslint-disable-next-line
declare const window: any;

export const logError = (error: Error) => {
  if (getEnvironment() === "local") {
    console.log(error);
  }

  if (typeof window !== "undefined" && !!window.faro) {
    window.faro.api.pushError(error);
  }
};

export const initFaro = (): Faro | null => {
  if (getEnvironment() === "local") return null;

  return initializeFaro({
    url: faroTelemetryUrl,
    app: {
      name: "aktivitetskrav-mikrofrontend",
      version: "",
    },
    instrumentations: [
      ...getWebInstrumentations({
        captureConsole: false,
      }),
      new TracingInstrumentation(),
    ],
  });
};
