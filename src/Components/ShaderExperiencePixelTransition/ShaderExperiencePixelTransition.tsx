import { useMemo, useCallback, useRef, useContext } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { PageContext } from "../../context/PageContext";
import { useScroll } from "framer-motion";
import { useControls } from "leva";
import useCalcMeshPosition from '../../hooks/useCalcMeshPosition';

import fragmentShader from "./shaders/fragmentShader.glsl?raw";
import vertexShader from "./shaders/vertexShader.glsl?raw";

const ShaderExperiencePixelTransition = () => {
  const ctxPage = useContext(PageContext);
  const meshRef = useRef<THREE.Mesh>(null!);
  const {topMeshPosition, leftMeshPosition, width, height} = useCalcMeshPosition(ctxPage?.experienceSectionRect);

  const uniformsOptions = {
    progress: {
      value: 0.0,
      min: 0.0,
      max: 1.0,
      step: 0.01,
    },
  };

  const { scrollY } = useScroll();
  const { progress } = useControls(uniformsOptions);

  const uniforms = useMemo(
    () => ({
      u_black: { value: 0.07058823529411765 },
      u_white: { value: 0.9137254901960784 },
      u_progress: { value: progress },
    }),
    []
  );

  const updateShaderUniforms = useCallback(
    (scrollYValue: number, progress: number) => {
      if (!meshRef.current) return;
      const shaderMaterial = meshRef.current.material as THREE.ShaderMaterial;
      const { uniforms: shaderUniforms } = shaderMaterial;

      shaderUniforms.u_progress.value = progress;

      const targetY = scrollYValue + topMeshPosition;
      const targetX = leftMeshPosition;

      meshRef.current.position.set(targetX, targetY, 0);
    },
    [leftMeshPosition, topMeshPosition]
  );

  useFrame(() => {
    updateShaderUniforms(scrollY.get(), progress);
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[width, height, 1, 1]}></planeGeometry>
      <shaderMaterial fragmentShader={fragmentShader} vertexShader={vertexShader} uniforms={uniforms}></shaderMaterial>
    </mesh>
  );
};

export default ShaderExperiencePixelTransition;
