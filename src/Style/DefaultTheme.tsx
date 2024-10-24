import { DefaultTheme } from "styled-components";

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
    };
    padding: {
      small: string;
      medium: string;
      large: string;
    };
    fontSize: {
      small: string;
      medium: string;
      large: string;
      xl: string;
      xxl: string;
    };
    fontWeight: {
      light: number;
      regular: number;
      medium: number;
      bold: number;
    };
    fontType: {
      primary: string;
      secondary: string;
    };
  }
}

const lightTheme: DefaultTheme = {
  colors: {
    primary: "#FFFFFF",
    secondary: "#2B2C2E",
  },
  padding: {
    small: "1rem",
    medium: "2rem",
    large: "4rem",
  },
  fontSize: {
    small: "0.8rem",
    medium: "1rem",
    large: "2rem",
    xl: "3rem",
    xxl: "4rem",
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },
  fontType: {
    primary: "Inter",
    secondary: "Halant",
  },
};

const darkTheme = {
  colors: {
    primary: "#2B2C2E",
    secondary: "#FFFFFF",
  },
  padding: {
    small: "1rem",
    medium: "2rem",
    large: "4rem",
  },
  fontSize: {
    small: "0.8rem",
    medium: "1rem",
    large: "6rem",
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },
  fontType: {
    primary: "Inter",
    secondary: "Halant",
  },
};

export { lightTheme, darkTheme };
