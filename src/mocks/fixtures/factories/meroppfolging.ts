// src/mocks/fixtures/factories/meroppfolging.ts
import dayjs from "dayjs";
import { MerOppfolgingStatusDTO } from "../../../schema/merOppfolgingStatusSchema";

export type SenOppfolgingResponse = Extract<MerOppfolgingStatusDTO, { oppfolgingsType: "SEN_OPPFOLGING" }>;
export type KartleggingResponse = Extract<MerOppfolgingStatusDTO, { oppfolgingsType: "KARTLEGGING" }>;
export type IngenOppfolgingResponse = Extract<MerOppfolgingStatusDTO, { oppfolgingsType: "INGEN_OPPFOLGING" }>;

const DATE_FORMAT = "DD.MM.YYYY";

function formatDate(d: dayjs.Dayjs) {
  return d.format(DATE_FORMAT);
}

export function createNeedsHelpResponse(date: string = new Date().toISOString()): SenOppfolgingResponse {
  return {
    oppfolgingsType: "SEN_OPPFOLGING",
    senOppfolgingStatus: {
      responseStatus: "TRENGER_OPPFOLGING",
      hasAccessToSenOppfolging: true,
      responseDateTime: date,
      maxDate: null,
    },
  };
}

export function createDoesntNeedHelpResponse(date: string = new Date().toISOString()): SenOppfolgingResponse {
  return {
    oppfolgingsType: "SEN_OPPFOLGING",
    senOppfolgingStatus: {
      responseStatus: "TRENGER_IKKE_OPPFOLGING",
      hasAccessToSenOppfolging: true,
      responseDateTime: date,
      maxDate: null,
    },
  };
}

export function createOutdatedResponse(): SenOppfolgingResponse {
  const oldDate = new Date().toISOString();
  return {
    oppfolgingsType: "SEN_OPPFOLGING",
    senOppfolgingStatus: {
      responseStatus: "TRENGER_IKKE_OPPFOLGING",
      hasAccessToSenOppfolging: true,
      responseDateTime: oldDate,
      maxDate: null,
    },
  };
}

export function createNoResponse(opts: { maxDate: string | null }): SenOppfolgingResponse {
  return {
    oppfolgingsType: "SEN_OPPFOLGING",
    senOppfolgingStatus: {
      responseStatus: "NO_RESPONSE",
      hasAccessToSenOppfolging: true,
      responseDateTime: null,
      maxDate: opts.maxDate,
    },
  };
}

export function createKartleggingsspormalResponse(
  submitted: boolean,
  hasAccess: boolean,
  date: string = formatDate(dayjs()),
): KartleggingResponse {
  return {
    oppfolgingsType: "KARTLEGGING",
    kartleggingStatus: {
      responseStatus: submitted ? "SUBMITTED" : "NO_RESPONSE",
      hasAccessToKartlegging: hasAccess,
      responseDateTime: submitted ? date : null,
    },
  };
}

export const scenarioKeys = [
  "kartlegging_responded",
  "kartlegging_not_responded",
  "sen_no_response",
  "sen_needs_help",
  "sen_doesnt_need_help",
  "sen_outdated",
  "ingen",
] as const;

export type ScenarioKey = (typeof scenarioKeys)[number];

export const scenarios: Record<ScenarioKey, () => MerOppfolgingStatusDTO> = {
  kartlegging_responded: () => createKartleggingsspormalResponse(true, true, new Date().toISOString()),
  kartlegging_not_responded: () => createKartleggingsspormalResponse(false, true, undefined),
  sen_no_response: () => createNoResponse({ maxDate: "31. desember 2024" }),
  sen_needs_help: createNeedsHelpResponse,
  sen_doesnt_need_help: createDoesntNeedHelpResponse,
  sen_outdated: createOutdatedResponse,
  ingen: () => ({
    oppfolgingsType: "INGEN_OPPFOLGING",
    senOppfolgingStatus: null,
  }),
};
