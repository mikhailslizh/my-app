import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  primary: {
    main: "#FA9B34",
    selected: "rgba(250, 155, 52, 0.24)",
    focused: "rgba(250, 155, 52, 0.32)"
  },
  background: "#f5f5f5",
  surface: "#ffffff",
  black: {
    high: "rgba(0, 0, 0, 0.87)",
    medium: "rgba(0, 0, 0, 0.56)",
    disable: "rgba(0, 0, 0, 0.32)",
    overlay: "rgba(0, 0, 0, 0.08)",
    hover: "rgba(0, 0, 0, 0.08)",
    press: "rgba(0, 0, 0, 0.16)",
    outline: "rgba(0, 0, 0, 0.26)",
    disableOutline: "rgba(0, 0, 0, 0.12)",
    scrim: "rgba(0, 0, 0, 0.25)",
    divider: "rgba(0, 0, 0, 0.12)"
  },
  white: {
    high: "white",
    medium: "rgba(255, 255, 255, 0.7)",
    disable: "rgba(255, 255, 255, 0.5)",
    overlay: "rgba(255, 255, 255, 0.16)",
    hover: "rgba(255, 255, 255, 0.08)",
    press: "rgba(255, 255, 255, 0.16)"
  },
  info: {
    main: "rgb(33, 148, 243)",
    overlay: "rgba(33, 148, 243, 0.08)"
  },
  success: {
    main: "rgb(109, 204, 61)",
    overlay: "rgb(109, 204, 61, 0.08)"
  },
  error: {
    main: "rgb(241, 93, 72)",
    overlay: "rgb(241, 93, 72, 0.08)"
  },
  yellow: {
    main: "rgb(255, 214, 10)",
    overlay: "rgb(255, 214, 10, 0.08)"
  },
  purple: {
    main: "rgb(123, 97, 255)",
    overlay: "rgb(123, 97, 255, 0.08)"
  },
  gray: {
    main: "rgb(158, 158, 158)",
    overlay: "rgb(158, 158, 158, 0.08)"
  },
  shadow: [
    "0px 0px 0px rgba(51, 51, 51, 0), 0px 0px 0px rgba(51, 51, 51, 0), 0px 0px 0px rgba(51, 51, 51, 0)",
    "0px 1px 1px rgba(51, 51, 51, 0.04), 0px 2px 1px rgba(51, 51, 51, 0.02), 0px 1px 3px rgba(51, 51, 51, 0.1)",
    "0px 2px 2px rgba(51, 51, 51, 0.04), 0px 3px 1px rgba(0, 0, 0, 0.02), 0px 1px 5px rgba(0, 0, 0, 0.1)",
    "0px 3px 4px rgba(51, 51, 51, 0.04), 0px 3px 3px rgba(51, 51, 51, 0.02), 0px 1px 8px rgba(51, 51, 51, 0.1)",
    "0px 4px 5px rgba(51, 51, 51, 0.04), 0px 1px 10px rgba(51, 51, 51, 0.02), 0px 2px 4px rgba(51, 51, 51, 0.1)",
    "0px 6px 10px rgba(51, 51, 51, 0.04), 0px 1px 18px rgba(51, 51, 51, 0.02), 0px 3px 5px rgba(51, 51, 51, 0.1)",
    "0px 8px 10px rgba(51, 51, 51, 0.04), 0px 3px 14px rgba(51, 51, 51, 0.02), 0px 5px 5px rgba(51, 51, 51, 0.1)",
    "0px 9px 12px rgba(51, 51, 51, 0.04), 0px 3px 16px rgba(51, 51, 51, 0.02), 0px 5px 6px rgba(51, 51, 51, 0.1)",
    "0px 12px 17px rgba(51, 51, 51, 0.04), 0px 5px 22px rgba(51, 51, 51, 0.02), 0px 7px 8px rgba(51, 51, 51, 0.1)",
    "0px 16px 24px rgba(51, 51, 51, 0.04), 0px 6px 30px rgba(51, 51, 51, 0.02), 0px 8px 10px rgba(51, 51, 51, 0.1)",
    "0px 24px 38px rgba(51, 51, 51, 0.04), 0px 9px 46px rgba(51, 51, 51, 0.02), 0px 11px 15px rgba(51, 51, 51, 0.1)"
  ],
  transition: {
    spring: {
      type: "spring",
      mass: 1,
      stiffness: 500,
      damping: 50
    },
    easeInOut: {
      ease: "easeInOut",
      duration: 0.2
    }
  }
};
