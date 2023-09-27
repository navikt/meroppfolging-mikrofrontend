import { HeadingSpacing } from "../../typography/typography";
import { Column } from "../../columns/Column";
import React, { ReactNode } from "react";
import {
  AlertContainer,
  ChevronPanel,
  ChevronSection,
  ErrorIcon,
  HeadingRow,
  InfoIcon,
  MainContentRow,
  MainContentText,
  SuccessIcon,
  YellowWarningIcon,
} from "./PanelComponents";
import { aktivitetskravUrl } from "../../../api/urls";
import { ChevronRightIcon } from "@navikt/aksel-icons";

interface Props {
  href?: string;
  headingText: string;
  alertStyle: "info" | "success" | "warning" | "error";
  bodyText: string;
  children?: ReactNode;
}

export const MikrofrontendLinkPanel = ({ href, headingText, alertStyle, bodyText, children }: Props) => {
  return (
    <ChevronPanel
      id="mikrofrontend__linkPanel"
      onClick={() => {
        window.open(href || aktivitetskravUrl);
      }}
    >
      <HeadingRow>
        <HeadingSpacing size={"small"} level={"2"}>
          {headingText}
        </HeadingSpacing>
        <ChevronSection>
          <AlertContainer>
            {alertStyle === "info" && <InfoIcon />}
            {alertStyle === "warning" && <YellowWarningIcon />}
            {alertStyle === "success" && <SuccessIcon />}
            {alertStyle === "error" && <ErrorIcon />}
          </AlertContainer>
          <ChevronRightIcon className="navds-link-panel__chevron" aria-hidden />
        </ChevronSection>
      </HeadingRow>
      <MainContentRow>
        <Column gap={"1rem"}>
          <MainContentText size="medium" level={"3"}>
            {bodyText}
          </MainContentText>
          {children}
        </Column>
      </MainContentRow>
    </ChevronPanel>
  );
};
