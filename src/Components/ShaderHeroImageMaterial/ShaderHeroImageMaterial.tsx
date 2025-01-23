import { useEffect, useRef, useMemo, useCallback, useContext } from "react";
import * as THREE from "three";
import { useFrame, type ThreeEvent } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { PageContext } from "../../context/PageContext";
import { useScroll } from "framer-motion";

import fragmentShader from "./shaders/fragmentShader.glsl?raw";
import vertexShader from "./shaders/vertexShader.glsl?raw";

import image from "../../Images/mobile_man_face.jpg";
import displacement from "../../Images/textures/melt 6 - 512x512.png";

const ShaderHeroImageMaterial = () => {
  const ctxPage = useContext(PageContext);
  const meshRef = useRef<THREE.Mesh>(null!);
  const mousePosRef = useRef<THREE.Vector2>(new THREE.Vector2(9999, 9999));

  const { scrollY } = useScroll();

  const imageTexture = useTexture(image);
  const displacementTexture = useTexture(displacement);

  const effectDuration = 3.0;

  const calculatedMeshPosition = useMemo(() => {
    if (ctxPage?.heroImgRect?.top && ctxPage.heroImgRect.left && ctxPage.heroImgRect.height && ctxPage.heroImgRect.width) {
      return {
        topMeshPosition: -ctxPage?.heroImgRect?.top + window.innerHeight / 2 - ctxPage.heroImgRect.height / 2,
        leftMeshPosition: ctxPage.heroImgRect.left - window.innerWidth / 2 + ctxPage.heroImgRect.width / 2,
      };
    }
    return { topMeshPosition: 0, leftMeshPosition: 0 };
  }, [ctxPage?.heroImgRect?.top, ctxPage?.heroImgRect?.left, ctxPage?.heroImgRect?.height, ctxPage?.heroImgRect?.width]);

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
    (delta: number, clockTime: number, isMouseOver: boolean, scrollYValue: number) => {
      if (!meshRef.current) return;

      const shaderMaterial = meshRef.current.material as THREE.ShaderMaterial;
      const { uniforms: shaderUniforms } = shaderMaterial;

      shaderUniforms.u_time.value = clockTime;
      shaderUniforms.u_mouse.value.copy(mousePosRef.current);
      shaderUniforms.u_decay.value = THREE.MathUtils.lerp(shaderUniforms.u_decay.value, isMouseOver ? 0.0 : 1.0, delta * 2);
      shaderUniforms.u_progress.value = Math.min(shaderUniforms.u_progress.value + delta / effectDuration, 3.0);
      const targetY = scrollYValue + calculatedMeshPosition.topMeshPosition;
      const targetX = calculatedMeshPosition.leftMeshPosition;

      meshRef.current.position.set(targetX, targetY, 0);
    },
    [calculatedMeshPosition.leftMeshPosition, calculatedMeshPosition.topMeshPosition]
  );

  useFrame((state, delta) => {
    updateShaderUniforms(delta, state.clock.getElapsedTime(), false, scrollY.get());
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const shaderMaterial = meshRef.current.material as THREE.ShaderMaterial;
      shaderMaterial.uniforms.u_progress.value = -0.5;
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  return (
    <mesh ref={meshRef} onPointerMove={handleMouseMove}>
      <planeGeometry args={[ctxPage?.heroImgRect?.width, ctxPage?.heroImgRect?.height, 1,1]} />
      <shaderMaterial fragmentShader={fragmentShader} vertexShader={vertexShader} uniforms={uniforms} />
    </mesh>
  );
};

export default ShaderHeroImageMaterial;
