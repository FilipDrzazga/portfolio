import { ThemeProvider } from "styled-components";
import GlobalStyle from "./Style/GlobalStyle";
import { lightTheme } from "./Style/DefaultTheme";

// import LandingPage from "./Pages/LandingPage/LandingPage";
import AboutPage from "./Pages/AboutPage/AboutPage";

export default function App() {
  return (
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        {/* <LandingPage /> */}
        <AboutPage />
      </ThemeProvider>
  );
}
