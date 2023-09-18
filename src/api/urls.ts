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

const ISDIALOGMOTE_API_URL: EnvUrl = {
  local: "http://localhost:3000/api/v2/arbeidstaker/brev",
  development: `https://www.intern.dev.nav.no/tms-min-side-proxy/syk/dialogmote/api/v2/arbeidstaker/brev`,
  production: `https://www.nav.no/tms-min-side-proxy/syk/dialogmote/api/v2/arbeidstaker/brev`,
};
export const isdialogmoteApiUrl = ISDIALOGMOTE_API_URL[getEnvironment()];
