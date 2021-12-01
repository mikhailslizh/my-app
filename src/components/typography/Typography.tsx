import React, { FC, ReactNode } from "react";
import styled from "styled-components";

interface Props {
  variant?: string;
  children: ReactNode;
  align?: string;
  color?: string;
}

const H1 = styled.h1<Props>`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  text-align: ${(props) => props.align};
  color: ${(props) => (props.color ? props.color : props.theme.black.high)};
`;

const Subtitle1 = styled.p<Props>`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: ${(props) => props.align};
  color: ${(props) => (props.color ? props.color : props.theme.black.high)};
`;

const Body1 = styled.p<Props>`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: ${(props) => props.align};
  color: ${(props) => (props.color ? props.color : props.theme.black.high)};
`;

const Caption = styled.p<Props>`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-align: ${(props) => props.align};
  color: ${(props) => (props.color ? props.color : props.theme.black.high)};
`;

export const Typography: FC<Props> = ({ variant, children, align, color }) => {
  return (
    <>
      {variant === "h1" && (
        <H1 align={align} color={color}>
          {children}
        </H1>
      )}
      {variant === "subtitle1" && (
        <Subtitle1 align={align} color={color}>
          {children}
        </Subtitle1>
      )}
      {variant === "body1" && (
        <Body1 align={align} color={color}>
          {children}
        </Body1>
      )}
      {variant === "caption" && (
        <Caption align={align} color={color}>
          {children}
        </Caption>
      )}
    </>
  );
};
