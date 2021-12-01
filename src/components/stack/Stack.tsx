import React, { FC, ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
  direction?: string;
  gap?: number;
  radius?: number;
  bg?: string;
  margin?: string;
}

const Box = styled.div<Props>`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === "column" ? "column" : "row"};
  gap: ${({ gap }) => `${gap}px`};
  border-radius: ${({ radius }) => `${radius}px`};
  background-color: ${({ bg }) => bg};
  overflow: hidden;
  margin: ${({ margin }) => margin};
`;

export const Stack: FC<Props> = ({
  children,
  direction,
  gap,
  radius,
  bg,
  margin
}) => {
  return (
    <Box
      direction={direction}
      gap={gap}
      radius={radius}
      bg={bg}
      margin={margin}
    >
      {children}
    </Box>
  );
};
