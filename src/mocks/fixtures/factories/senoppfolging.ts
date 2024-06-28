import { SenOppfolgingStatusDTO } from "../../../schema/senOppfolgingStatusSchema";
import dayjs from "dayjs";

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
    responseTime: dayjs().subtract(4, "days").format("DD.MM.YYYY"),
    ...props,
  };
};

export const createDoesntNeedHelpResponse = (props?: Partial<SenOppfolgingStatusDTO>): SenOppfolgingStatusDTO => {
  return {
    isPilot: true,
    responseStatus: "TRENGER_IKKE_OPPFOLGING",
    responseTime: dayjs().subtract(6, "days").format("DD.MM.YYYY"),
    ...props,
  };
};

export const createOutdatedResponse = (props?: Partial<SenOppfolgingStatusDTO>): SenOppfolgingStatusDTO => {
  return {
    isPilot: true,
    responseStatus: "TRENGER_IKKE_OPPFOLGING",
    responseTime: dayjs().subtract(7, "days").format("DD.MM.YYYY"),
    ...props,
  };
};
