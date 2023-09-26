import { HeadingSpacing } from "../../typography/typography";
import { Column } from "../../columns/Column";
import React, { ReactNode } from "react";
import {
  AlertContainer,
  BasePanel,
  ErrorIcon,
  HeadingRow,
  InfoIcon,
  MainContentRow,
  MainContentText,
  SuccessIcon,
  YellowWarningIcon,
} from "./PanelComponents";

interface Props {
  headingText: string;
  alertStyle: "info" | "success" | "warning" | "error";
  bodyText: string;
  children?: ReactNode;
}

export const MikrofrontendPanel = ({ headingText, alertStyle, bodyText, children }: Props) => {
  return (
    <BasePanel>
      <HeadingRow>
        <HeadingSpacing size={"small"} level={"2"}>
          {headingText}
        </HeadingSpacing>
        <AlertContainer>
          {alertStyle === "info" && <InfoIcon />}
          {alertStyle === "warning" && <YellowWarningIcon />}
          {alertStyle === "success" && <SuccessIcon />}
          {alertStyle === "error" && <ErrorIcon />}
        </AlertContainer>
      </HeadingRow>
      <MainContentRow>
        <Column gap={"1rem"}>
          <MainContentText size="medium" level={"3"}>
            {bodyText}
          </MainContentText>
          {children}
        </Column>
      </MainContentRow>
    </BasePanel>
  );
};
