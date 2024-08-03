// import { useState } from "react";
import { ThemeProvider } from "styled-components";

import LandingPage from "./Pages/LandingPage/LandingPage";
import GlobalStyle from "./Style/GlobalStyle";
import { lightTheme, darkTheme } from "./Style/DefaultTheme";

export default function App() {
  // const [theme, setTheme] = useState("lightTheme");

  // const toggleTheme = () => {
  //   setTheme((prevTheme) => (prevTheme === 'lightTheme' ? 'darkTheme' : 'lightTheme'));
  // };

  return (
    // <ThemeProvider theme={theme === "lightTheme" ? lightTheme : darkTheme}> Originalline
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <LandingPage />
    </ThemeProvider>
  );
}