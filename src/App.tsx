// import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Canvas } from "@react-three/fiber";

import GlobalStyle from "./Style/GlobalStyle";
import { lightTheme, darkTheme } from "./Style/DefaultTheme";
// import LandingPage from "./Pages/LandingPage/LandingPage";
// import AboutMe from "./Pages/AboutMe/AboutMe";
// import MobileNavigation from "./Components/MobileNavigation/MobileNavigation";
import FragmentShaderExample from "./Pages/FragmentShaderExample/FragmentShaderExample";

export default function App() {
  // const [theme, setTheme] = useState("lightTheme");

  // const toggleTheme = () => {
  //   setTheme((prevTheme) => (prevTheme === 'lightTheme' ? 'darkTheme' : 'lightTheme'));
  // };

  return (
    // <ThemeProvider theme={theme === "lightTheme" ? lightTheme : darkTheme}> Originalline
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      {/* <MobileNavigation />
      <AboutMe /> */}
      {/* <LandingPage /> */}
      <Canvas style={{ position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh" }}>
        <FragmentShaderExample />
      </Canvas>
    </ThemeProvider>
  );
}
