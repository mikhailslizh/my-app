import React, { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import { Typography } from "../typography/Typography";

interface Props {
  icon?: ReactNode;
  label?: string;
  variant?: string;
  size?: string;
  onClick?: () => void;
}

const Box = styled(motion.button)<Props>`
  display: flex;
  gap: ${({ size }) =>
    (size === "L" && "12px") || (size === "XL" && "12px") || "8px"};
  padding: ${({ size, label }) =>
    (size === "S" && !label && "4px") ||
    (size === "S" && label && "4px 8px") ||
    (size === "M" && !label && "8px") ||
    (size === "M" && label && "8px 16px") ||
    (size === "L" && !label && "12px") ||
    (size === "L" && label && "12px 20px") ||
    (size === "XL" && !label && "16px") ||
    (size === "XL" && label && "16px 24px") ||
    (label && "8px 16px") ||
    "8px"};
  align-items: center;
  justify-content: center;
  border-radius: ${({ size }) =>
    (size === "L" && "10px") || (size === "XL" && "10px") || "5px"};
  border: none;
  color: ${({ variant }) =>
    (variant === "contained" && theme.white.high) || theme.black.medium};
  background-color: ${({ variant }) =>
    (variant === "contained" && theme.primary.main) || "transparent"};
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

export const Button: FC<Props> = ({ icon, label, variant, size, onClick }) => {
  return (
    <Box
      size={size}
      label={label}
      variant={variant}
      whileHover={interaction.hover}
      whileTap={interaction.press}
      transition={interaction.transition}
      onClick={onClick}
    >
      {icon && icon}
      {label && (
        <Typography color="inherit" variant="body1">
          {label}
        </Typography>
      )}
    </Box>
  );
};
