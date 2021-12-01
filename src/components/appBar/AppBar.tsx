import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { Button } from "../button/Button";
import { Typography } from "../typography/Typography";

interface Props {
  leftIcon?: ReactNode;
  title?: string;
  rightIcon?: ReactNode;
  onLeftButtonClick?: () => void;
  onRightButtonClick?: () => void;
}

const Box = styled.div<Props>`
  display: grid;
  grid-template-columns: ${({ leftIcon, rightIcon }) =>
    (!leftIcon && !rightIcon && "1fr") || "auto 1fr auto"};
  align-items: center;
  padding: ${({ leftIcon, rightIcon }) =>
    (leftIcon && !rightIcon && "8px 48px 8px 8px") ||
    (!leftIcon && rightIcon && "8px 8px 8px 48px") ||
    (!leftIcon && !rightIcon && "16px") ||
    "8px"};
  background-color: ${(props) => props.theme.background};
`;

export const AppBar: FC<Props> = ({
  leftIcon,
  title,
  rightIcon,
  onLeftButtonClick,
  onRightButtonClick
}) => {
  return (
    <Box leftIcon={leftIcon} rightIcon={rightIcon}>
      {leftIcon && <Button icon={leftIcon} onClick={onLeftButtonClick} />}
      <Typography variant="subtitle1" align="center">
        {title}
      </Typography>
      {rightIcon && <Button icon={rightIcon} onClick={onRightButtonClick} />}
    </Box>
  );
};
