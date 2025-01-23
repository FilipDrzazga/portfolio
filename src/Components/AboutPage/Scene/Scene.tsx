import { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import ShaderHeroImageMaterial from "../../ShaderHeroImageMaterial/ShaderHeroImageMaterial";
import ShaderAboutMeImageMaterial from '../../ShaderAboutMeImageMaterial/ShaderAboutMeImageMaterial';

const Scene = () => {
  const fovPosition = useMemo(() => {
    const cameraZPosition = 600;
    const newFovPosition = 2 * Math.atan(window.innerHeight / 2 / cameraZPosition) * (180 / Math.PI);
    return newFovPosition;
  }, []);

  return (
    <Canvas
      style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100vh", zIndex: -1 }}
      gl={{ alpha: true }}
      dpr={[1, Math.min(window.devicePixelRatio, 2)]}
      camera={{ fov: fovPosition, position: [0, 0, 600] }}
    >
      <OrbitControls />
      <ShaderHeroImageMaterial />
      <ShaderAboutMeImageMaterial/>
    </Canvas>
  );
};

export default Scene;
