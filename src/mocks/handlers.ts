import { http, HttpResponse } from "msw";
import { scenarios } from "./fixtures/factories/meroppfolging";

export const handlers = [
  http.get("api/meroppfolging/v2/senoppfolging/status", () => {
    return HttpResponse.json(scenarios.kartlegging());
  }),
];
