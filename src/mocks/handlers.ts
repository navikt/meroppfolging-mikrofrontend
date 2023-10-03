import { rest } from "msw";
import fixtures from "./fixtures";

export const handlers = [
  rest.get("*/api/aktivitetskrav/vurdering", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(fixtures.unntakVurdering));
  }),
];
