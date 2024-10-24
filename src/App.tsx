// import { useState } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./Style/GlobalStyle";
import { lightTheme, darkTheme } from "./Style/DefaultTheme";
import LandingPage from "./Pages/LandingPage/LandingPage";
import AboutMe from "./Pages/AboutMe/AboutMe";
import MobileNavigation from "./Components/MobileNavigation/MobileNavigation";

export default function App() {
  // const [theme, setTheme] = useState("lightTheme");

  // const toggleTheme = () => {
  //   setTheme((prevTheme) => (prevTheme === 'lightTheme' ? 'darkTheme' : 'lightTheme'));
  // };

  return (
    // <ThemeProvider theme={theme === "lightTheme" ? lightTheme : darkTheme}> Originalline
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <MobileNavigation />
      <AboutMe />
      {/* <LandingPage /> */}
    </ThemeProvider>
  );
}
