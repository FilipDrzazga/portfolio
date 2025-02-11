import { useMemo, useCallback, useRef, useContext } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { PageContext } from "../../context/PageContext";
import { useScroll } from "framer-motion";
import useCalcMeshPosition from "../../hooks/useCalcMeshPosition";
import { useMediaQuery } from "react-responsive";

import fragmentShader from "./shaders/fragmentShader.glsl?raw";
import vertexShader from "./shaders/vertexShader.glsl?raw";

import mobileImg from "../../images/aboutme_mobile_img_480w.webp";
import tabletImg from "../../images/aboutme_tablet_img_768w.webp";
import desktopImg from "../../images/aboutme_desktop_img_1920w.webp";

const ShaderAboutMeImageMaterial = () => {
  const ctxPage = useContext(PageContext);
  const meshRef = useRef<THREE.Mesh>(null!);
  const { top, left, height, width } = useCalcMeshPosition(ctxPage?.aboutMeImgRect);
  const { scrollY } = useScroll();

  const isMobile = useMediaQuery({ maxWidth: 768, orientation: "portrait" });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });
  const isScreen = useMediaQuery({ minWidth: 1025 });
  
  const texturePath = useMemo(() => {
    if (isMobile){
      return mobileImg;
    } 
    if (isTablet){
      return tabletImg;
    }
    if (isScreen){
      return desktopImg;
    }
    return tabletImg;
  }, [isMobile, isTablet, isScreen]);
  
  const imageTexture = useTexture(texturePath);
  

  const uniforms = useMemo(
    () => ({
      u_scrollY: { value: 0.0 },
      u_imageTexture: { value: imageTexture },
      u_gridSize: { value: 20.0 },
      u_squareSize: { value: 5.0 },
      u_displacementStrength: { value: 0.4 },
    }),
    [imageTexture]
  );

  const updateShaderUniforms = useCallback(
    ( scrollYValue: number) => {
      if (!meshRef.current) return;
      // const shaderMaterial = meshRef.current.material as THREE.ShaderMaterial;
      // const { uniforms: shaderUniforms } = shaderMaterial;
      

      const targetY = scrollYValue + top!;
      const targetX = left!;

      meshRef.current.position.set(targetX, targetY, 0);
    },
    [left, top]
  );

  useFrame(() => {
    updateShaderUniforms( scrollY.get());
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[width, height, 1, 1]}></planeGeometry>
      <shaderMaterial fragmentShader={fragmentShader} vertexShader={vertexShader} uniforms={uniforms}></shaderMaterial>
    </mesh>
  );
};

export default ShaderAboutMeImageMaterial;
