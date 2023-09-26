import { rest } from "msw";
import { createVurdering } from "./fixtures/AktivitetskravFixture";

export const handlers = [
  rest.get("*/api/aktivitetskrav/vurdering", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(createVurdering("FORHANDSVARSEL")));
  }),
];
