import { SenOppfolgingStatusDTO } from "../../../schema/senOppfolgingStatusSchema";
import moment from "moment";

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
    responseTime: moment().subtract(4, "days").format("DD.MM.YYYY"),
    ...props,
  };
};

export const createDoesntNeedHelpResponse = (props?: Partial<SenOppfolgingStatusDTO>): SenOppfolgingStatusDTO => {
  return {
    isPilot: true,
    responseStatus: "TRENGER_IKKE_OPPFOLGING",
    responseTime: moment().subtract(6, "days").format("DD.MM.YYYY"),
    ...props,
  };
};

export const createOutdatedResponse = (props?: Partial<SenOppfolgingStatusDTO>): SenOppfolgingStatusDTO => {
  return {
    isPilot: true,
    responseStatus: "TRENGER_IKKE_OPPFOLGING",
    responseTime: moment().subtract(7, "days").format("DD.MM.YYYY"),
    ...props,
  };
};
