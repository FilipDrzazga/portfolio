import { useMemo, useCallback, useRef } from "react";
import { usePageStore } from "../../zustand/uesPageStore";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { useScroll, useTransform } from "motion/react";
import useCalcMeshPosition from "../../hooks/useCalcMeshPosition";
import { useMediaQuery } from "react-responsive";

import fragmentShader from "./shaders/fragmentShader.glsl?raw";
import vertexShader from "./shaders/vertexShader.glsl?raw";

import mobileImg from "../../images/aboutme_mobile_img_480w.webp";
import tabletImg from "../../images/aboutme_tablet_img_768w.webp";
import desktopImg from "../../images/aboutme_desktop_img_1920w.webp";

const ShaderAboutMeImageMaterial = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const aboutMeImgRect = usePageStore((state) => state.aboutMeImgRect);

  const { top, left, height, width } = useCalcMeshPosition(aboutMeImgRect);
  const { scrollY } = useScroll();

  const isMobile = useMediaQuery({ maxWidth: 768, orientation: "portrait" });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });
  const isScreen = useMediaQuery({ minWidth: 1025 });

  const enterStart = Math.abs(top!) - window.innerHeight;
  const enterComplete = Math.abs(top!) + height! / 2 - window.innerHeight / 2;
  const exitStart = Math.abs(top!) + height! - window.innerHeight / 2;
  const exitComplete = Math.abs(top!) + height! + window.innerHeight / 4;

  const displacementStrength = useTransform(scrollY, [enterStart, enterComplete, exitStart, exitComplete], [0.4, 0, 0, 0.4]);

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
      u_scrollY: { value: 0.0 },
      u_imageTexture: { value: imageTexture },
      u_displacementStrength: { value: 0.4 },
    }),
    [imageTexture]
  );

  const updateShaderUniforms = useCallback(
    (displacementStrength: number) => {
      if (!meshRef.current) return;
      const shaderMaterial = meshRef.current.material as THREE.ShaderMaterial;
      const { uniforms: shaderUniforms } = shaderMaterial;

      shaderUniforms.u_displacementStrength.value = displacementStrength;
    },
    []
  );

  useFrame(() => {
    updateShaderUniforms(displacementStrength.get());
  });

  return (
    <mesh ref={meshRef} position={[left!, top!, 0]}>
      <planeGeometry args={[width, height, 1, 1]}></planeGeometry>
      <shaderMaterial fragmentShader={fragmentShader} vertexShader={vertexShader} uniforms={uniforms}></shaderMaterial>
    </mesh>
  );
};

export default ShaderAboutMeImageMaterial;
