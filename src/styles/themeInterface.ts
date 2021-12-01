import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primary: {
      main: string;
      selected: string;
      focused: string;
    };
    background: string;
    surface: string;
    black: {
      high: string;
      medium: string;
      disable: string;
      overlay: string;
      hover: string;
      press: string;
      outline: string;
      disableOutline: string;
      scrim: string;
      divider: string;
    };
    white: {
      high: string;
      medium: string;
      disable: string;
      overlay: string;
      hover: string;
      press: string;
    };
    info: {
      main: string;
      overlay: string;
    };
    success: {
      main: string;
      overlay: string;
    };
    error: {
      main: string;
      overlay: string;
    };
    yellow: {
      main: string;
      overlay: string;
    };
    purple: {
      main: string;
      overlay: string;
    };
    gray: {
      main: string;
      overlay: string;
    };
    shadow: string[];
    transition: any;
  }
}
