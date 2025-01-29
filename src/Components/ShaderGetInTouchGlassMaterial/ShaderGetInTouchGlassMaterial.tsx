import { useContext, useRef, useCallback, useMemo } from "react";
import { PageContext } from "../../context/PageContext";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "framer-motion";
import useCalcMeshPosition from "../../hooks/useCalcMeshPosition";

import fragmentShader from "./shaders/fragmentShader.glsl?raw";
import vertexShader from "./shaders/vertexShader.glsl?raw";

const ShaderGetInTouchGlassMaterial = () => {
  const ctxPage = useContext(PageContext);
  const meshRef = useRef<THREE.Mesh>(null!);
  const { top, left, width, height } = useCalcMeshPosition(ctxPage?.getInTouchSectionRect);

  const { scrollY } = useScroll();

  const uniforms = useMemo(
    () => ({
      u_time: { value: 0.0 },
    }),
    []
  );

  const updateShaderUniforms = useCallback(
    (scrollYValue: number, clock: number) => {
      if (!meshRef.current) return;
      const shaderMaterial = meshRef.current.material as THREE.ShaderMaterial;
      const { uniforms: shaderUniforms } = shaderMaterial;

      shaderUniforms.u_time.value = clock;

      const targetY = scrollYValue + top!;
      const targetX = left!;

      meshRef.current.position.set(targetX, targetY, 0);
    },
    [left, top]
  );

  useFrame((state) => {
    updateShaderUniforms(scrollY.get(), state.clock.elapsedTime);
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[width, height, 1, 1]}></planeGeometry>
      <shaderMaterial fragmentShader={fragmentShader} vertexShader={vertexShader} uniforms={uniforms}></shaderMaterial>
    </mesh>
  );
};

export default ShaderGetInTouchGlassMaterial;
