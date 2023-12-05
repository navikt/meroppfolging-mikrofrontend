const isProduction = window.location.href.includes("www.nav.no");
const isDevelopment = window.location.href.includes("intern.dev.nav.no");

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

const ESYFO_PROXY_API_URL: EnvUrl = {
  local: "/api/aktivitetsplikt",
  development: `https://www.intern.dev.nav.no/esyfo-proxy/api/aktivitetsplikt`,
  production: `https://www.nav.no/esyfo-proxy/api/aktivitetsplikt`,
};

const AKTIVITETSKRAV_URL: EnvUrl = {
  local: "http://localhost:3000/?aktivitetsplikt-url",
  development: `https://www.intern.dev.nav.no/syk/aktivitetskrav`,
  production: `https://www.nav.no/syk/aktivitetskrav`,
};

const JOURNALPOST_PAGE_URL: EnvUrl = {
  local: "http://localhost:3000/?journalpost-url",
  development: `https://www.intern.dev.nav.no/dokumentarkiv/tema/OPP`,
  production: `https://www.nav.no/dokumentarkiv/tema/OPP`,
};

export const proxyApiUrl = ESYFO_PROXY_API_URL[getEnvironment()];
export const aktivitetskravUrl = AKTIVITETSKRAV_URL[getEnvironment()];
export const journalpostPageUrl = (journalpostId: string) => {
  const baseUrl = JOURNALPOST_PAGE_URL[getEnvironment()];
  return `${baseUrl}/${journalpostId}`;
};

export const faroTelemetryUrl = FARO_TELEMETRY_URL[getEnvironment()];
