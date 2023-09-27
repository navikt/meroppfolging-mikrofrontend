import { rest } from "msw";
import { AktivitetskravVurdering } from "../schema/aktivitetskravVurderingSchema";

const vurderingResponse: AktivitetskravVurdering = { status: "FORHANDSVARSEL", journalpostId: "123" };

export const handlers = [
  rest.get("*/api/aktivitetskrav/vurdering", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(vurderingResponse));
  }),
];
