import { useEffect, useRef, useMemo, useCallback } from "react";
import { type MotionValue } from "framer-motion";
import * as THREE from "three";
import { useFrame, type ThreeEvent } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

import fragmentShader from "./shaders/fragmentShader.glsl?raw";
import vertexShader from "./shaders/vertexShader.glsl?raw";

import image from "../../Images/mobile_man_face.jpg";
import displacement from "../../Images/textures/melt 6 - 512x512.png";

interface ShaderImageMaterialProps {
  readonly imageRect: { [key: string]: number | undefined };
  readonly scrollY: MotionValue<number>;
}

const ShaderImageMaterial = ({
  imageRect: { geometryWidth, geometryHeight, topMeshPos, leftMeshPos },
  scrollY,
}: ShaderImageMaterialProps) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const mousePosRef = useRef<THREE.Vector2>(new THREE.Vector2(9999, 9999));

  const imageTexture = useTexture(image);
  const displacementTexture = useTexture(displacement);

  const effectDuration = 3.0;

  const calculatedMeshPosition = useMemo(() => {
    if (topMeshPos && leftMeshPos && geometryHeight && geometryWidth) {
      return {
        topMeshPosition: -topMeshPos + window.innerHeight / 2 - geometryHeight / 2,
        leftMeshPosition: leftMeshPos - window.innerWidth / 2 + geometryWidth / 2,
      };
    }
    return { topMeshPosition: 0, leftMeshPosition: 0 };
  }, [topMeshPos, leftMeshPos, geometryHeight, geometryWidth]);

  const uniforms = useMemo(
    () => ({
      u_imageTexture: { value: imageTexture },
      u_displacementTexture: { value: displacementTexture },
      u_progress: { value: 0 },
      u_mouse: { value: new THREE.Vector2() },
      u_time: { value: 0 },
      u_decay: { value: 1.0 },
    }),
    [imageTexture, displacementTexture]
  );

  const handleMouseMove = (event: ThreeEvent<PointerEvent>) => {
    if (event.uv) {
      mousePosRef.current.copy(event.uv);
    }
  };

  const updateShaderUniforms = useCallback(
<<<<<<< HEAD
<<<<<<< HEAD
    (delta: number, clockTime: number, isMouseOver: boolean, scrollYValue: number) => {
=======
    (delta: number, clockTime: number, isMouseOver: boolean, scrollYValue: number, camera: THREE.Camera) => {
>>>>>>> 2bf75e7c379e60df898975f69327a0d9ab21d4fe
=======
    (delta: number, clockTime: number, isMouseOver: boolean, scrollYValue: number, camera: THREE.Camera) => {
>>>>>>> 2bf75e7c
      if (!meshRef.current) return;

      const shaderMaterial = meshRef.current.material as THREE.ShaderMaterial;
      const { uniforms: shaderUniforms } = shaderMaterial;

      shaderUniforms.u_time.value = clockTime;
      shaderUniforms.u_mouse.value.copy(mousePosRef.current);
      shaderUniforms.u_decay.value = THREE.MathUtils.lerp(shaderUniforms.u_decay.value, isMouseOver ? 0.0 : 1.0, delta * 2);
      shaderUniforms.u_progress.value = Math.min(shaderUniforms.u_progress.value + delta / effectDuration, 3.0);

      const targetY = scrollYValue * 0.95 + calculatedMeshPosition.topMeshPosition;
      const targetX = calculatedMeshPosition.leftMeshPosition;

      meshRef.current.position.set(targetX, targetY, 0);
    },
    [calculatedMeshPosition.leftMeshPosition, calculatedMeshPosition.topMeshPosition]
  );

  useFrame((state, delta) => {
<<<<<<< HEAD
<<<<<<< HEAD
    updateShaderUniforms(delta, state.clock.getElapsedTime(), false, scrollY.get());
=======
    updateShaderUniforms(delta, state.clock.getElapsedTime(), false, scrollY.get(), state.camera);
>>>>>>> 2bf75e7c379e60df898975f69327a0d9ab21d4fe
=======
    updateShaderUniforms(delta, state.clock.getElapsedTime(), false, scrollY.get(), state.camera);
>>>>>>> 2bf75e7c
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const shaderMaterial = meshRef.current.material as THREE.ShaderMaterial;
      shaderMaterial.uniforms.u_progress.value = -0.5;
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <mesh ref={meshRef} onPointerMove={handleMouseMove}>
      <planeGeometry args={[geometryWidth, geometryHeight, 32, 32]} />
      <shaderMaterial fragmentShader={fragmentShader} vertexShader={vertexShader} uniforms={uniforms} />
    </mesh>
  );
};

export default ShaderImageMaterial;
