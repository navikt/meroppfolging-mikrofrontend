import { HeadingSpacing } from "../../typography/typography";
import { Column } from "../../columns/Column";
import React from "react";
import {
  AlertContainer,
  BasePanel,
  ContainedTag,
  ErrorIcon,
  HeadingRow,
  InfoIcon,
  MainContentRow,
  MainContentText,
  SuccessIcon,
  YellowWarningIcon,
} from "./PanelComponents";

export interface TagMeta {
  text: string;
  variant: "info-moderate" | "success-moderate" | "warning-moderate" | "error-moderate";
}

interface Props {
  headingText: string;
  alertStyle: "info" | "success" | "warning" | "error";
  bodyText: string;
  tag?: TagMeta;
}

export const MikrofrontendPanel = ({ headingText, alertStyle, bodyText, tag }: Props) => {
  return (
    <BasePanel id="mikrofrontend__panel">
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
          {tag && (
            <ContainedTag size={"small"} variant={tag.variant}>
              {tag.text}
            </ContainedTag>
          )}
        </Column>
      </MainContentRow>
    </BasePanel>
  );
};
