import { SenOppfolgingStatusDTO } from "../../../schema/senOppfolgingStatusSchema";

export const createNoResponse = (props?: Partial<SenOppfolgingStatusDTO>): SenOppfolgingStatusDTO => {
  return {
    isPilot: true,
    responseStatus: "NO_RESPONSE",
    ...props,
  };
};

export const createNeedsHelpResponse = (props?: Partial<SenOppfolgingStatusDTO>): SenOppfolgingStatusDTO => {
  return {
    isPilot: true,
    responseStatus: "TRENGER_OPPFOLGING",
    responseTime: "12.03.2024",
    ...props,
  };
};

export const createDoesntNeedHelpResponse = (props?: Partial<SenOppfolgingStatusDTO>): SenOppfolgingStatusDTO => {
  return {
    isPilot: true,
    responseStatus: "TRENGER_IKKE_OPPFOLGING",
    responseTime: "12.03.2024",
    ...props,
  };
};
