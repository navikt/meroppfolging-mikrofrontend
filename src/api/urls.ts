const isProduction = window.location.href.includes("www.nav.no");
const isDevelopment = window.location.href.includes("intern.dev.nav.no");

export const getEnvironment = () => {
  if (isProduction) {
    return "production";
  }

  if (isDevelopment) {
    return "development";
  }

  return "local";
};

type EnvUrl = { development: string; production: string; local: string };

const AKTIVITETSKRAV_API_URL: EnvUrl = {
  local: "http://localhost:3000/api/aktivitetskrav/vurdering",
  development: `https://www.intern.dev.nav.no/aktivitetskrav-backend/api/aktivitetskrav/vurdering`,
  production: `https://www.nav.no/aktivitetskrav-backend/api/aktivitetskrav/vurdering`,
};

const AKTIVITETSKRAV_URL: EnvUrl = {
  local: "https://demo.ekstern.dev.nav.no/syk/info/aktivitetsplikt",
  development: `https://www.ekstern.dev.nav.no/syk/info/aktivitetsplikt`,
  production: `https://www.nav.no/syk/info/aktivitetsplikt`,
};

export const aktivitetskravApiUrl = AKTIVITETSKRAV_API_URL[getEnvironment()];
export const aktivitetskravUrl = AKTIVITETSKRAV_URL[getEnvironment()];
