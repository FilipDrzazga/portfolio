import { DefaultTheme } from "styled-components";

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      accent: string;
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
      large: number;
      bold: number;
    };
    fontFamily: {
      Montserrat: string;
      latoLight: string;
      latoRegular: string;
      latoBold: string;
      playfairRegular: string;
      playfairMedium: string;
      playfairBold: string;
    };
  }
}

const lightTheme: DefaultTheme = {
  colors: {
    primary: "#E9E9E9",
    secondary: "#121212",
    accent: "#25F18B",
  },
  padding: {
    small: "1rem",
    medium: "2rem",
    large: "4rem",
  },
  fontSize: {
    small: "0.8rem",
    medium: "1.2rem",
    large: "2rem",
    xl: "3rem",
    xxl: "4rem",
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    large: 600,
    bold: 700,
  },
  fontFamily: {
    Montserrat: "Montserrat",
    latoLight: "Lato-Light",
    latoRegular: "Lato-Regular",
    latoBold: "Lato-Bold",
    playfairRegular: "PlayfairDisplay-Regular",
    playfairMedium: "PlayfairDisplay-Medium",
    playfairBold: "PlayfairDisplay-Bold",
  },
};

const darkTheme = {
  colors: {
    primary: "#121212",
    secondary: "#E9E9E9",
    accent: "#25F18B",
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
  fontFamily: {
    Montserrat: "Montserrat",
    latoLight: "Lato-Light",
    latoRegular: "Lato-Regular",
    latoBold: "Lato-Bold",
    playfairRegular: "PlayfairDisplay-Regular",
    playfairMedium: "PlayfairDisplay-Medium",
    playfairBold: "PlayfairDisplay-Bold",
  },
};

export { lightTheme, darkTheme };
