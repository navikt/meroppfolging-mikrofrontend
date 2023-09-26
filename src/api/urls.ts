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
export const aktivitetskravApiUrl = AKTIVITETSKRAV_API_URL[getEnvironment()];
