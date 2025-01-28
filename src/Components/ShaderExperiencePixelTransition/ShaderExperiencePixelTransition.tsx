import { useMemo, useCallback, useRef, useContext } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { PageContext } from "../../context/PageContext";
import { useScroll, useTransform } from "framer-motion";
import useCalcMeshPosition from "../../hooks/useCalcMeshPosition";

import fragmentShader from "./shaders/fragmentShader.glsl?raw";
import vertexShader from "./shaders/vertexShader.glsl?raw";

const ShaderExperiencePixelTransition = () => {
  const ctxPage = useContext(PageContext);
  const meshRef = useRef<THREE.Mesh>(null!);
  const { top, left, width, height } = useCalcMeshPosition(ctxPage?.experienceSectionRect);

  const { scrollY } = useScroll();

  const start = Math.trunc(Math.abs(top!)) - window.innerHeight;
  const end = Math.trunc(Math.abs(top!));
  const progressTransition = useTransform(scrollY, [start, start + height! / 2, end], [0, 0.5, 1]);

  const uniforms = useMemo(
    () => ({
      u_black: { value: 0.07058823529411765 },
      u_white: { value: 0.9137254901960784 },
      u_progress: { value: progressTransition.get() },
    }),
    []
  );

  const updateShaderUniforms = useCallback(
    (scrollYValue: number, progressTransition: number) => {
      if (!meshRef.current) return;
      const shaderMaterial = meshRef.current.material as THREE.ShaderMaterial;
      const { uniforms: shaderUniforms } = shaderMaterial;

      shaderUniforms.u_progress.value = progressTransition;

      const targetY = scrollYValue + top!;
      const targetX = left!;

      meshRef.current.position.set(targetX, targetY, 0);
    },
    [left, top]
  );

  useFrame(() => {
    updateShaderUniforms(scrollY.get(), progressTransition.get());
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[width, height, 1, 1]}></planeGeometry>
      <shaderMaterial fragmentShader={fragmentShader} vertexShader={vertexShader} uniforms={uniforms}></shaderMaterial>
    </mesh>
  );
};

export default ShaderExperiencePixelTransition;
