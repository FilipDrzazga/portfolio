import { useState, useMemo, useContext } from "react";
import { PageContext } from "../../../context/PageContext";
import { Canvas } from "@react-three/fiber";
import { useMotionValueEvent, useScroll } from "framer-motion";
import useCalcMeshPosition from "../../../hooks/useCalcMeshPosition";

import ShaderHeroImageMaterial from "../../ShaderHeroImageMaterial/ShaderHeroImageMaterial";
import ShaderAboutMeImageMaterial from "../../ShaderAboutMeImageMaterial/ShaderAboutMeImageMaterial";
import ShaderExperiencePixelTransition from "../../ShaderExperiencePixelTransition/ShaderExperiencePixelTransition";
import ShaderGetInTouchGlassMaterial from "../../ShaderGetInTouchGlassMaterial/ShaderGetInTouchGlassMaterial";

const Scene = () => {
  const ctxPage = useContext(PageContext);
  const { top: introSectionTopPosition } = useCalcMeshPosition(ctxPage?.introSectionRect);
  const { top: experienceSectionTopPosition } = useCalcMeshPosition(ctxPage?.experienceSectionRect);
  const [canvasBackgroundColor, setCanvasBackgroundColor] = useState("#E9E9E9");

  const { scrollY } = useScroll();
  const start = Math.trunc(Math.abs(introSectionTopPosition!));
  const end = Math.trunc(Math.abs(experienceSectionTopPosition!));
  const white = "#E9E9E9";
  const black = "#121212";

  useMotionValueEvent(scrollY, "change", (scrollPosition) => {
    if (scrollPosition >= start && scrollPosition < end) {
      setCanvasBackgroundColor(black);
    } else if (scrollPosition >= end) {
      setCanvasBackgroundColor(white);
    } else {
      setCanvasBackgroundColor(white);
    }
  });

  const fovPosition = useMemo(() => {
    const cameraZPosition = 600;
    const newFovPosition = 2 * Math.atan(window.innerHeight / 2 / cameraZPosition) * (180 / Math.PI);
    return newFovPosition;
  }, []);

  return (
    <Canvas
      style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100vh", zIndex: -1 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, Math.min(window.devicePixelRatio, 2)]}
      camera={{ fov: fovPosition, position: [0, 0, 600] }}
    >
      <color attach="background" args={[canvasBackgroundColor]} />
      <ShaderHeroImageMaterial />
      <ShaderAboutMeImageMaterial />
      <ShaderExperiencePixelTransition />
      <ShaderGetInTouchGlassMaterial />
    </Canvas>
  );
};

export default Scene;
