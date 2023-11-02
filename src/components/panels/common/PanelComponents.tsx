import styled from "styled-components";
import {
  CheckmarkCircleFillIcon,
  ExclamationmarkTriangleFillIcon,
  InformationSquareFillIcon,
  XMarkOctagonFillIcon,
} from "@navikt/aksel-icons";
import { Heading, Tag } from "@navikt/ds-react";

export const InfoIcon = styled(InformationSquareFillIcon)`
  align-self: flex-start;
  flex-shrink: 0;
  font-size: 1.5rem;
  height: 24px;
  background: radial-gradient(circle at 50% 57%, var(--a-surface-default) 32%, 0, transparent);
  color: var(--ac-alert-icon-info-color, var(--a-icon-info));
  box-shadow: var(--a-shadow-xsmall);
`;

export const YellowWarningIcon = styled(ExclamationmarkTriangleFillIcon)`
  align-self: flex-start;
  flex-shrink: 0;
  font-size: 1.5rem;
  height: 24px;
  background: radial-gradient(circle at 50% 57%, var(--a-surface-default) 32%, 0, transparent);
  color: var(--ac-alert-icon-warning-color, var(--a-icon-warning));
  box-shadow: var(--a-shadow-xsmall);
`;

export const SuccessIcon = styled(CheckmarkCircleFillIcon)`
  align-self: flex-start;
  flex-shrink: 0;
  font-size: 1.5rem;
  height: 24px;
  background: radial-gradient(circle at 50% 57%, var(--a-surface-default) 32%, 0, transparent);
  color: var(--ac-alert-icon-success-color, var(--a-icon-success));
  box-shadow: var(--a-shadow-xsmall);
`;

export const ErrorIcon = styled(XMarkOctagonFillIcon)`
  align-self: flex-start;
  flex-shrink: 0;
  font-size: 1.5rem;
  height: 24px;
  background: radial-gradient(circle at 50% 57%, var(--a-surface-default) 32%, 0, transparent);
  color: var(--ac-alert-icon-error-color, var(--a-icon-danger));
  box-shadow: var(--a-shadow-xsmall);
`;

export const BasePanel = styled.div`
  width: 100%;
  text-decoration: none;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 0.5px 0 rgba(0, 0, 0, 0.18);
`;

export const ChevronPanel = styled(BasePanel)`
  cursor: pointer;

  &:hover {
    box-shadow: var(--a-shadow-small);

    .navds-link-panel__chevron {
      transform: translateX(4px);
    }

    .aktivitetskrav__title {
      text-decoration: underline;
    }
  }
`;

export const HeadingRow = styled.div`
  display: flex;
  text-decoration: none;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #0000001a;
  padding: var(--a-spacing-4) var(--a-spacing-4) var(--a-spacing-3);
  @media (min-width: 648px) {
    padding: var(--a-spacing-5) var(--a-spacing-5) var(--a-spacing-4);
  }
`;

export const MainContentRow = styled.div`
  display: flex;
  text-decoration: none;
  flex-direction: row;
  width: 100%;
  align-items: center;
  padding: var(--a-spacing-3) var(--a-spacing-4) var(--a-spacing-4);
  @media (min-width: 648px) {
    padding: var(--a-spacing-4) var(--a-spacing-5) var(--a-spacing-5);
  }
`;

export const MainContentText = styled(Heading)`
  font-weight: var(--a-font-weight-regular) !important;
`;

export const ChevronSection = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const ContainedTag = styled(Tag)`
  width: fit-content;
`;

export const AlertContainer = styled.div`
  display: flex;
  align-items: center;
  width: 24px;
  height: 24px;
`;
