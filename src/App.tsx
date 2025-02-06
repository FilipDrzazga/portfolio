// import { useState } from "react";
import PageContextProvider from "./context/PageContext";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./style/GlobalStyle";
import { lightTheme } from "./style/DefaultTheme";

// import LandingPage from "./Pages/LandingPage/LandingPage";
import AboutPage from "./pages/AboutPage/AboutPage";

export default function App() {
  // const [theme, setTheme] = useState("lightTheme");

  // const toggleTheme = () => {
  //   setTheme((prevTheme) => (prevTheme === 'lightTheme' ? 'darkTheme' : 'lightTheme'));
  // };

  return (
    // <ThemeProvider theme={theme === "lightTheme" ? lightTheme : darkTheme}> Originalline
    <PageContextProvider>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        {/* <LandingPage /> */}
        <AboutPage />
      </ThemeProvider>
    </PageContextProvider>
  );
}
