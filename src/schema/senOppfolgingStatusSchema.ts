import { boolean, literal, object, string, union, z } from "zod";

const responseStatusType = union([
  literal("NO_RESPONSE"),
  literal("TRENGER_OPPFOLGING"),
  literal("TRENGER_IKKE_OPPFOLGING"),
]);

export const senOppfolgingStatusSchema = object({
  isPilot: boolean(),
  responseStatus: responseStatusType,
  responseTime: string().nullish(),
  maxDate: string().nullish(),
});

export type SenOppfolgingStatusDTO = z.infer<typeof senOppfolgingStatusSchema>;
