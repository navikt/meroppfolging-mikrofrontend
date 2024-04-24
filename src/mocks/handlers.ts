import { http, HttpResponse } from "msw";
import fixtures from "./fixtures";

export const handlers = [
  http.get("api/aktivitetsplikt", () => {
    return HttpResponse.json(fixtures.nyKandidatVurdering);
  }),
];
