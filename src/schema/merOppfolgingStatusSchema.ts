import { z } from "zod";

const responseStatusType = z.union([
  z.literal("NO_RESPONSE"),
  z.literal("TRENGER_OPPFOLGING"),
  z.literal("TRENGER_IKKE_OPPFOLGING"),
]);

const senOppfolgingStatusSchema = z.object({
  responseStatus: responseStatusType,
  responseTime: z.string().nullish(),
  hasAccessToSenOppfolging: z.boolean(),
  maxDate: z.string().nullish(),
});

export const merOppfolgingStatusSchema = z.discriminatedUnion("oppfolgingsType", [
  z.object({
    oppfolgingsType: z.literal("SEN_OPPFOLGING"),
    senOppfolgingStatus: senOppfolgingStatusSchema,
  }),
  z.object({
    oppfolgingsType: z.literal("KARTLEGGING"),
    senOppfolgingStatus: z.null(),
  }),
  z.object({
    oppfolgingsType: z.literal("INGEN_OPPFOLGING"),
    senOppfolgingStatus: z.null(),
  }),
]);

export type MerOppfolgingStatusDTO = z.infer<typeof merOppfolgingStatusSchema>;
export type SenOppfolgingStatusDTO = z.infer<typeof senOppfolgingStatusSchema>;
