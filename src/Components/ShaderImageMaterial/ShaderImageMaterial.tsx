import { useState, useEffect, useRef, useMemo } from "react";
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
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [isEffectDistortion, setIsEffectDistortion] = useState(false);

  const scrollYProgressRef = useRef<number>(0);
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
      mousePosRef.current = event.uv;
    }
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  useFrame((state, delta) => {
    scrollYProgressRef.current = scrollY.get();

    if (meshRef.current && calculatedMeshPosition) {
      meshRef.current.position.x = calculatedMeshPosition!.leftMeshPosition;
      meshRef.current.position.y = THREE.MathUtils.lerp(
        calculatedMeshPosition!.topMeshPosition,
        scrollYProgressRef.current + calculatedMeshPosition!.topMeshPosition,
        1
      );

      const shaderMaterialUniforms = (meshRef.current.material as THREE.ShaderMaterial).uniforms;

      shaderMaterialUniforms.u_time.value = state.clock.getElapsedTime();
      shaderMaterialUniforms.u_mouse.value = mousePosRef.current;

      shaderMaterialUniforms.u_decay.value = THREE.MathUtils.lerp(
        shaderMaterialUniforms.u_decay.value,
        isMouseOver ? 0.0 : 1.0,
        delta * 2
      );

      if (isEffectDistortion) {
        shaderMaterialUniforms.u_progress.value += delta / effectDuration;

        if (shaderMaterialUniforms.u_progress.value > 3.0) {
          shaderMaterialUniforms.u_progress.value = -0.5;
          setIsEffectDistortion(false);
        }
      }
    }
  });

  useEffect(() => {
    if (meshRef.current) {
      setIsEffectDistortion(true);
    }
    const interval = setInterval(() => {
      setIsEffectDistortion(true);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <mesh
      ref={meshRef}
      onPointerEnter={handleMouseEnter}
      onPointerMove={handleMouseMove}
      onPointerLeave={handleMouseLeave}
    >
      <planeGeometry args={[geometryWidth, geometryHeight, 32, 32]} />
      <shaderMaterial fragmentShader={fragmentShader} vertexShader={vertexShader} uniforms={uniforms} />
    </mesh>
  );
};

export default ShaderImageMaterial;
