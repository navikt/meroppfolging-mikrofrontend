import { rest } from "msw";

export const handlers = [
  //TODO: Lage et mockendepunkt for PDF
  rest.get("*/api/v2/arbeidstaker/brev", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([]));
  }),
];
