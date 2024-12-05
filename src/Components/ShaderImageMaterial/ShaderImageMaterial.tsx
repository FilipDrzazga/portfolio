import { useState, useEffect, useRef, useMemo } from "react";
import * as THREE from "three";
import { useFrame, type ThreeEvent } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
// import { useControls } from "leva";

import fragmentShader from "./fragmentShader.glsl?raw";
import vertexShader from "./vertexShader.glsl?raw";

import image from "../../Images/face_original1.jpg";
import displacement from "../../Images/textures/melt 6 - 512x512.png";

const ShaderImageMaterial = () => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [isEffectDistortion, setIsEffectDistortion] = useState(false);

  const meshRef = useRef<THREE.Mesh>(null);
  const mousePosRef = useRef<THREE.Vector2>(new THREE.Vector2(9999, 9999));

  const imageTexture = useTexture(image);
  const displacementTexture = useTexture(displacement);

  const effectDuration = 1.5;

  useFrame((state, delta) => {
    if (meshRef.current) {
      // vec4 imageColor = texture2D(u_imageTexture, distortedUV);
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
      position={[0.55, 1.3, 0]}
    >
      <planeGeometry args={[2.5, 4, 32, 32]} />
      <shaderMaterial fragmentShader={fragmentShader} vertexShader={vertexShader} uniforms={uniforms} />
    </mesh>
  );
};

export default ShaderImageMaterial;