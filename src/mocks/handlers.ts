import { http, HttpResponse } from "msw";
import { scenarios } from "./fixtures/factories/meroppfolging";

export const handlers = [
  http.get("api/mikrofrontend/v1/status", () => {
    return HttpResponse.json(scenarios.kartlegging_not_responded());
  }),
];
