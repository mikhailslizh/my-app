import { motion } from "framer-motion";
import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import { Stack } from "../stack/Stack";
import { Typography } from "../typography/Typography";

interface Props {
  leftIcon?: ReactNode;
  title?: string;
  subtitle?: string;
  rightIcon?: ReactNode;
}

const Box = styled(motion.div)<Props>`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 16px;
  padding: ${({ subtitle, rightIcon }) =>
    (rightIcon && !subtitle && "8px 8px 8px 16px") ||
    (rightIcon && subtitle && "16px 8px 16px 16px") ||
    "16px"};
  flex: 1;
`;

const interaction = {
  hover: {
    backgroundColor: theme.black.hover
  },
  press: {
    backgroundColor: theme.black.press
  },
  transition: theme.transition.easeInOut
};

export const ListItem: FC<Props> = ({
  leftIcon,
  title,
  subtitle,
  rightIcon
}) => {
  return (
    <Box
      subtitle={subtitle}
      rightIcon={rightIcon}
      whileHover={interaction.hover}
      whileTap={interaction.press}
      transition={interaction.transition}
    >
      {leftIcon && leftIcon}
      <Stack direction="column">
        <Typography variant="body1">{title}</Typography>
        {subtitle && (
          <Typography variant="caption" color={theme.black.medium}>
            {subtitle}
          </Typography>
        )}
      </Stack>
      {rightIcon && rightIcon}
    </Box>
  );
};
