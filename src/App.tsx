import PageContextProvider from "./context/PageContext";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./style/GlobalStyle";
import { lightTheme } from "./style/DefaultTheme";

// import LandingPage from "./Pages/LandingPage/LandingPage";
import AboutPage from "./pages/AboutPage/AboutPage";

export default function App() {
  return (
    <PageContextProvider>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        {/* <LandingPage /> */}
        <AboutPage />
      </ThemeProvider>
    </PageContextProvider>
  );
}
