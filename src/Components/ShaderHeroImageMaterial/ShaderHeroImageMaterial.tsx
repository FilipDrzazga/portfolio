import { useRef, useMemo, useCallback, useContext } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { PageContext } from "../../context/PageContext";
import { useScroll } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import useCalcMeshPosition from "../../hooks/useCalcMeshPosition";

import fragmentShader from "./shaders/fragmentShader.glsl?raw";
import vertexShader from "./shaders/vertexShader.glsl?raw";

import mobileImg from "../../images/hero_mobile_img_480w.webp";
import tabletImg from "../../images/hero_tablet_img_768w.webp";
import desktopImg from "../../images/hero_desktop_img_1920w.webp";

const ShaderHeroImageMaterial = () => {
  const ctxPage = useContext(PageContext);
  const meshRef = useRef<THREE.Mesh>(null!);
  const { top, left, width, height } = useCalcMeshPosition(ctxPage?.heroImgRect);
  const { scrollY } = useScroll();

  const isMobile = useMediaQuery({ maxWidth: 768, orientation: "portrait" });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });
  const isScreen = useMediaQuery({ minWidth: 1025 });

  const texturePath = useMemo(() => {
    if (isMobile) {
      return mobileImg;
    }
    if (isTablet) {
      return tabletImg;
    }
    if (isScreen) {
      return desktopImg;
    }
    return tabletImg;
  }, [isMobile, isTablet, isScreen]);

  const imageTexture = useTexture(texturePath);

  const uniforms = useMemo(
    () => ({
      u_imageTexture: { value: imageTexture },
      u_baseColor: { value: new THREE.Color("#E9E9E9") },
      u_mouse: { value: new THREE.Vector2() },
      u_time: { value: 0 },
      u_maxDelay: { value: 1.0 },
      u_fadeDuration: { value: 0.5 },
      u_dispFadeDuration: { value: 0.5 },
      u_gridSize: { value: 20.0 },
      u_squareSize: { value: 5.0 },
      u_displacementStrength: { value: 0.0 },
    }),
    [imageTexture]
  );

  const updateShaderUniforms = useCallback(
    (clockTime: number, scrollYValue: number) => {
      if (!meshRef.current) return;

      const shaderMaterial = meshRef.current.material as THREE.ShaderMaterial;
      const { uniforms: shaderUniforms } = shaderMaterial;

      shaderUniforms.u_time.value = clockTime;

      const targetY = scrollYValue + top!;
      const targetX = left!;

      meshRef.current.position.set(targetX, targetY, 0);
    },
    [left, top]
  );

  useFrame((state) => {
    updateShaderUniforms(state.clock.getElapsedTime(), scrollY.get());
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[width, height, 1, 1]} />
      <shaderMaterial fragmentShader={fragmentShader} vertexShader={vertexShader} uniforms={uniforms} />
    </mesh>
  );
};

export default ShaderHeroImageMaterial;
