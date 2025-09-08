import { MerOppfolgingStatusDTO, SenOppfolgingStatusDTO } from "../../../schema/merOppfolgingStatusSchema";
import dayjs from "dayjs";

export const createNoResponse = (senOppfolgingProps?: Partial<SenOppfolgingStatusDTO>): MerOppfolgingStatusDTO => {
  return {
    oppfolgingsType: "SEN_OPPFOLGING",
    senOppfolgingStatus: {
      hasAccessToSenOppfolging: true,
      responseStatus: "NO_RESPONSE",
      ...senOppfolgingProps,
    },
  };
};

export const createNeedsHelpResponse = (
  senOppfolgingProps?: Partial<SenOppfolgingStatusDTO>,
): MerOppfolgingStatusDTO => {
  return {
    oppfolgingsType: "SEN_OPPFOLGING",
    senOppfolgingStatus: {
      hasAccessToSenOppfolging: true,
      responseStatus: "TRENGER_OPPFOLGING",
      responseTime: dayjs().subtract(4, "days").format("DD.MM.YYYY"),
      ...senOppfolgingProps,
    },
  };
};

export const createDoesntNeedHelpResponse = (
  senOppfolgingProps?: Partial<SenOppfolgingStatusDTO>,
): MerOppfolgingStatusDTO => {
  return {
    oppfolgingsType: "SEN_OPPFOLGING",
    senOppfolgingStatus: {
      hasAccessToSenOppfolging: true,
      responseStatus: "TRENGER_IKKE_OPPFOLGING",
      responseTime: dayjs().subtract(6, "days").format("DD.MM.YYYY"),
      ...senOppfolgingProps,
    },
  };
};

export const createOutdatedResponse = (
  senOppfolgingProps?: Partial<SenOppfolgingStatusDTO>,
): MerOppfolgingStatusDTO => {
  return {
    oppfolgingsType: "SEN_OPPFOLGING",
    senOppfolgingStatus: {
      hasAccessToSenOppfolging: true,
      responseStatus: "TRENGER_IKKE_OPPFOLGING",
      responseTime: dayjs().subtract(7, "days").format("DD.MM.YYYY"),
      ...senOppfolgingProps,
    },
  };
};

export const createKartleggingsspormalResponse = (): MerOppfolgingStatusDTO => {
  return {
    oppfolgingsType: "KARTLEGGING",
    senOppfolgingStatus: null,
  };
};

export const scenarioKeys = [
  "kartlegging",
  "sen_no_response",
  "sen_needs_help",
  "sen_doesnt_need_help",
  "sen_outdated",
  "ingen",
] as const;

export type ScenarioKey = (typeof scenarioKeys)[number];

export const scenarios: Record<ScenarioKey, () => MerOppfolgingStatusDTO> = {
  kartlegging: createKartleggingsspormalResponse,
  sen_no_response: createNoResponse,
  sen_needs_help: createNeedsHelpResponse,
  sen_doesnt_need_help: createDoesntNeedHelpResponse,
  sen_outdated: createOutdatedResponse,
  ingen: () => ({
    oppfolgingsType: "INGEN_OPPFOLGING",
    senOppfolgingStatus: null,
  }),
};
