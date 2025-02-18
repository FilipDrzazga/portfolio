import { ThemeProvider } from "styled-components";
import { ReactLenis } from "lenis/react";
import GlobalStyle from "./Style/GlobalStyle";
import { lightTheme } from "./Style/DefaultTheme";

// import LandingPage from "./Pages/LandingPage/LandingPage";
import AboutPage from "./Pages/AboutPage/AboutPage";

export default function App() {
  return (
    <ReactLenis root options={{ lerp: 0.15, syncTouch: true, autoRaf: true, smoothWheel: true }}>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <AboutPage />
      </ThemeProvider>
    </ReactLenis>
  );
}
