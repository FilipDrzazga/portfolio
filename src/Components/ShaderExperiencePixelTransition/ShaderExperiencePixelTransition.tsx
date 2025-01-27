import { useMemo, useCallback, useRef, useContext } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { PageContext } from "../../context/PageContext";
import { useScroll } from "framer-motion";
import { useControls } from "leva";

import fragmentShader from "./shaders/fragmentShader.glsl?raw";
import vertexShader from "./shaders/vertexShader.glsl?raw";

const ShaderExperiencePixelTransition = () => {
  const ctxPage = useContext(PageContext);
  const meshRef = useRef<THREE.Mesh>(null!);

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

  const calculatedMeshPosition = useMemo(() => {
    const { top, left, height, width } = ctxPage?.experienceSectionRect || {};

    if (top && !left && height && width) {
      return {
        topMeshPosition: -top + window.innerHeight / 2 - height / 2,
        leftMeshPosition: left! - window.innerWidth / 2 + width / 2,
      };
    }
    return { topMeshPosition: 0, leftMeshPosition: 0 };
  }, [ctxPage?.experienceSectionRect]);

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

      const targetY = scrollYValue + calculatedMeshPosition.topMeshPosition;
      const targetX = calculatedMeshPosition.leftMeshPosition;

      meshRef.current.position.set(targetX, targetY, 0);
    },
    [calculatedMeshPosition.leftMeshPosition, calculatedMeshPosition.topMeshPosition]
  );

  useFrame(() => {
    updateShaderUniforms(scrollY.get(), progress);
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[ctxPage?.experienceSectionRect?.width, ctxPage?.experienceSectionRect?.height, 1, 1]}></planeGeometry>
      <shaderMaterial fragmentShader={fragmentShader} vertexShader={vertexShader} uniforms={uniforms}></shaderMaterial>
    </mesh>
  );
};

export default ShaderExperiencePixelTransition;
