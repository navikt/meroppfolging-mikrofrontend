import {
  AlertContainer,
  HeadingRow,
  MainContentRow,
  MainContentText,
  StyledPanel,
  YellowWarningIcon,
} from "./PanelComponents";
import { HeadingSpacing } from "../typography/typography";
import { Column } from "../columns/Column";
import { Button } from "@navikt/ds-react";
import { logEvent } from "../../amplitude/amplitude";
import React from "react";

export const ForhaandsvarselPanel = () => {
  return (
    <StyledPanel>
      <HeadingRow>
        <HeadingSpacing size={"small"} level={"2"}>
          Varsel om stans av sykepenger
        </HeadingSpacing>
        <AlertContainer>
          <YellowWarningIcon />
        </AlertContainer>
      </HeadingRow>
      <MainContentRow>
        <Column gap={"1rem"}>
          <MainContentText size="medium" level={"3"}>
            Vi har vurdert at du ikke oppfyller vilkårene for å unntas aktivitetsplikten
          </MainContentText>
          <Button variant="secondary" onClick={() => logEvent("Forhåndsvarsel: Åpner PDF")}>
            Les brevet fra NAV
          </Button>
        </Column>
      </MainContentRow>
    </StyledPanel>
  );
};
