import { useMemo, useCallback, useRef, useContext } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { PageContext } from "../../context/PageContext";
import { useScroll } from "framer-motion";
import { useControls } from "leva";
import useCalcMeshPosition from "../../hooks/useCalcMeshPosition";

import fragmentShader from "./shaders/fragmentShader.glsl?raw";
import vertexShader from "./shaders/vertexShader.glsl?raw";

import mobileImg from "../../images/aboutme_mobile_img_480w.webp";
import tabletImg from "../../images/aboutme_tablet_img_768w.webp";
import screenImg from "../../images/aboutme_desktop_img_1920w.webp";
import { useMediaQuery } from "react-responsive";

const ShaderAboutMeImageMaterial = () => {
  const ctxPage = useContext(PageContext);
  const meshRef = useRef<THREE.Mesh>(null!);
  const { top, left, height, width } = useCalcMeshPosition(ctxPage?.aboutMeImgRect);

  const isMobile = useMediaQuery({ maxWidth: 768, orientation: "portrait" });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });
  const isScreen = useMediaQuery({ minWidth: 1025 });

  const texturePath = useMemo(() => {
    if (isMobile) return mobileImg;
    if (isTablet) return tabletImg;
    if (isScreen) return screenImg;
    return tabletImg;
  }, [isMobile, isTablet, isScreen]);

  const uniformsOptions = {
    gridSize: {
      value: 20.0,
      min: 0.0,
      max: 100.0,
      step: 1.0,
    },
    squareSize: {
      value: 4.0,
      min: 0.0,
      max: 10.0,
      step: 0.1,
    },
    displacementStrength: {
      value: 0.2,
      min: 0.0,
      max: 10.0,
      step: 0.1,
    },
    hidden: true,
  };

  const imageTexture = useTexture(texturePath);
  const { scrollY } = useScroll();
  const { gridSize, squareSize, displacementStrength } = useControls(uniformsOptions);

  const uniforms = useMemo(
    () => ({
      u_imageTexture: { value: imageTexture },
      u_gridSize: { value: 20.0 },
      u_squareSize: { value: 5.0 },
      u_displacementStrength: { value: 0.2 },
    }),
    [imageTexture]
  );

  const updateShaderUniforms = useCallback(
    (scrollYValue: number, gridSize: number, squareSize: number, displacementStrength: number) => {
      if (!meshRef.current) return;
      const shaderMaterial = meshRef.current.material as THREE.ShaderMaterial;
      const { uniforms: shaderUniforms } = shaderMaterial;

      shaderUniforms.u_gridSize.value = gridSize;
      shaderUniforms.u_squareSize.value = squareSize;
      shaderUniforms.u_displacementStrength.value = displacementStrength;

      const targetY = scrollYValue + top!;
      const targetX = left!;

      meshRef.current.position.set(targetX, targetY, 0);
    },
    [left, top]
  );

  useFrame(() => {
    updateShaderUniforms(scrollY.get(), gridSize, squareSize, displacementStrength);
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[width, height, 1, 1]}></planeGeometry>
      <shaderMaterial fragmentShader={fragmentShader} vertexShader={vertexShader} uniforms={uniforms}></shaderMaterial>
    </mesh>
  );
};

export default ShaderAboutMeImageMaterial;
