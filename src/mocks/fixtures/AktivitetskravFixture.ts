import { AktivitetskravStatus, VurderingArsak } from "../../schema/aktivitetskravVurderingSchema";
import { addDaysToDate, subtractDaysFromDate } from "../../utils/dateUtils";

export const createVurdering = (status: AktivitetskravStatus, arsaker?: VurderingArsak[]) => {
  return {
    uuid: "123-456-789-101",
    personIdent: "123456789",
    createdAt: subtractDaysFromDate(new Date(), 7).toISOString(),
    status: status,
    beskrivelse: "En beskrivelse",
    arsaker: arsaker || [],
    stoppunktAt: subtractDaysFromDate(new Date(), 14).toISOString(),
    updatedBy: subtractDaysFromDate(new Date(), 7).toISOString(),
    sistVurdert: subtractDaysFromDate(new Date(), 7).toISOString(),
    frist: addDaysToDate(new Date(), 14).toISOString(),
  };
};
