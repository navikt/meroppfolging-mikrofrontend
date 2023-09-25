import { literal, object, string, union, z } from "zod";

const aktivitetskravStatus = union([
  literal("NY"),
  literal("AVVENT"),
  literal("UNNTAK"),
  literal("OPPFYLT"),
  literal("FORHANDSVARSEL"),
  literal("STANS"),
  literal("IKKE_OPPFYLT"),
  literal("IKKE_AKTUELL"),
  literal("LUKKET"),
]);

const vurderingArsak = union([
  literal("OPPFOLGINGSPLAN_ARBEIDSGIVER"), //AVVENT
  literal("INFORMASJON_BEHANDLER"), //AVVENT
  literal("ANNET"), //AVVENT
  literal("MEDISINSKE_GRUNNER"), //UNNTAK
  literal("TILRETTELEGGING_IKKE_MULIG"), //UNNTAK
  literal("SJOMENN_UTENRIKS"), //UNNTAK
  literal("FRISKMELDT"), //OPPFYLT
  literal("GRADERT"), //OPPFYLT
  literal("TILTAK"), //OPPFYLT
]);

export const aktivitetskravVurderingSchema = object({
  uuid: string(),
  personIdent: string(),
  createdAt: string().datetime({ offset: true }),
  status: aktivitetskravStatus,
  beskrivelse: string().nullable(),
  arsaker: z.array(vurderingArsak),
  stoppunktAt: string().datetime({ offset: true }),
  updatedBy: string().datetime({ offset: true }).nullable(),
  sistVurdert: string().nullable(),
  frist: string().datetime({ offset: true }),
});

export type AktivitetskravVurdering = z.infer<typeof aktivitetskravVurderingSchema>;
export type AktivitetskravStatus = z.infer<typeof aktivitetskravStatus>;
export type VurderingArsak = z.infer<typeof vurderingArsak>;
