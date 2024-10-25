const isProduction = window.location.href.includes("www.nav.no");
const isDevelopment =
  window.location.href.includes("ansatt.dev.nav.no") || window.location.href.includes("intern.dev.nav.no");

export const getEnvironment = (): "production" | "development" | "local" => {
  if (isProduction) {
    return "production";
  }

  if (isDevelopment) {
    return "development";
  }

  return "local";
};

type EnvUrl = { development: string; production: string; local: string };

const FARO_TELEMETRY_URL: EnvUrl = {
  local: "nope",
  development: "https://telemetry.ekstern.dev.nav.no/collect",
  production: "https://telemetry.nav.no/collect",
};

const SSPS_URL: EnvUrl = {
  local: "http://localhost:3000/syk/meroppfolging/snart-slutt-pa-sykepengene",
  development: `https://www.ekstern.dev.nav.no/syk/meroppfolging/snart-slutt-pa-sykepengene`,
  production: `https://www.nav.no/syk/meroppfolging/snart-slutt-pa-sykepengene`,
};

const MEROPPFOLGING_BACKEND_API_URL: EnvUrl = {
  local: "http://localhost:3000/api/meroppfolging/v2/senoppfolging/status",
  development: `https://www.intern.dev.nav.no/esyfo-proxy/api/meroppfolging/v2/senoppfolging/status`,
  production: `https://www.nav.no/esyfo-proxy/api/meroppfolging/v2/senoppfolging/status`,
};

export const sspsUrl = SSPS_URL[getEnvironment()];
export const meroppfolgingApiUrl = MEROPPFOLGING_BACKEND_API_URL[getEnvironment()];

export const faroTelemetryUrl = FARO_TELEMETRY_URL[getEnvironment()];
