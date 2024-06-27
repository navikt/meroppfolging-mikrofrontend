import { http, HttpResponse } from "msw";
import { createNoResponse } from "./fixtures/factories/senoppfolging";

export const handlers = [
  http.get("api/meroppfolging/v2/senoppfolging/status", () => {
    return HttpResponse.json(createNoResponse());
  }),
];
