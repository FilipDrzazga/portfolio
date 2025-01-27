import { useRef, useMemo, useCallback, useContext } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { PageContext } from "../../context/PageContext";
import { useScroll } from "framer-motion";
import { useControls } from "leva";

import fragmentShader from "./shaders/fragmentShader.glsl?raw";
import vertexShader from "./shaders/vertexShader.glsl?raw";

import image from "../../Images/mobile_man_face.jpg";

const ShaderHeroImageMaterial = () => {
  const ctxPage = useContext(PageContext);
  const meshRef = useRef<THREE.Mesh>(null!);

  const uniformsOptions = {
    gridSize: {
      value: 20.0,
      min: 0.0,
      max: 100.0,
      step: 1.0,
    },
    squareSize: {
      value: 5.0,
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
  };

  const { scrollY } = useScroll();
  const { gridSize, squareSize, displacementStrength } = useControls(uniformsOptions);

  const imageTexture = useTexture(image);

  const calculatedMeshPosition = useMemo(() => {
    const { top, left, height, width } = ctxPage?.heroImgRect || {};

    if (top && left && height && width) {
      return {
        topMeshPosition: -top + window.innerHeight / 2 - height / 2,
        leftMeshPosition: left - window.innerWidth / 2 + width / 2,
      };
    }
    return { topMeshPosition: 0, leftMeshPosition: 0 };
  }, [ctxPage?.heroImgRect]);

  const uniforms = useMemo(
    () => ({
      u_imageTexture: { value: imageTexture },
      u_mouse: { value: new THREE.Vector2() },
      u_time: { value: 0 },
      u_gridSize: { value: 20.0 },
      u_squareSize: { value: 5.0 },
      u_displacementStrength: { value: 0.2 },
    }),
    [imageTexture]
  );

  const updateShaderUniforms = useCallback(
    (clockTime: number, scrollYValue: number, gridSize: number, squareSize: number, displacementStrength: number) => {
      if (!meshRef.current) return;

      const shaderMaterial = meshRef.current.material as THREE.ShaderMaterial;
      const { uniforms: shaderUniforms } = shaderMaterial;

      shaderUniforms.u_time.value = clockTime;
      shaderUniforms.u_gridSize.value = gridSize;
      shaderUniforms.u_squareSize.value = squareSize;
      shaderUniforms.u_displacementStrength.value = displacementStrength;

      const targetY = scrollYValue + calculatedMeshPosition.topMeshPosition;
      const targetX = calculatedMeshPosition.leftMeshPosition;

      meshRef.current.position.set(targetX, targetY, 0);
    },
    [calculatedMeshPosition.leftMeshPosition, calculatedMeshPosition.topMeshPosition]
  );

  useFrame((state) => {
    updateShaderUniforms(state.clock.getElapsedTime(), scrollY.get(), gridSize, squareSize, displacementStrength);
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[ctxPage?.heroImgRect?.width, ctxPage?.heroImgRect?.height, 1, 1]} />
      <shaderMaterial fragmentShader={fragmentShader} vertexShader={vertexShader} uniforms={uniforms} />
    </mesh>
  );
};

export default ShaderHeroImageMaterial;
