import { useMemo, useCallback, useRef, useContext } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { PageContext } from "../../context/PageContext";
import { useScroll } from "framer-motion";

import fragmentShader from './shaders/fragmentShader.glsl?raw';
import vertexShader from "./shaders/vertexShader.glsl?raw";

const ShaderExperiencePixelTransition = () => {
    const ctxPage = useContext(PageContext);
    const meshRef = useRef<THREE.Mesh>(null!);

    const { scrollY } = useScroll();

    const calculatedMeshPosition = useMemo(() => {
        if (ctxPage?.experienceSectionRect?.top && !ctxPage?.experienceSectionRect?.left && ctxPage?.experienceSectionRect?.height && ctxPage?.experienceSectionRect?.width) {
          return {
            topMeshPosition: -ctxPage?.experienceSectionRect?.top + window.innerHeight / 2 - ctxPage.experienceSectionRect.height / 2,
            leftMeshPosition: ctxPage.experienceSectionRect.left - window.innerWidth / 2 + ctxPage.experienceSectionRect.width / 2,
          };
        }
        return { topMeshPosition: 0, leftMeshPosition: 0 };
      }, [ctxPage?.experienceSectionRect?.top, ctxPage?.experienceSectionRect?.left, ctxPage?.experienceSectionRect?.height! , ctxPage?.experienceSectionRect?.width]);

              const updateShaderUniforms = useCallback(
                (scrollYValue: number) => {
                  if (!meshRef.current) return;
      
                  const targetY = scrollYValue + calculatedMeshPosition.topMeshPosition;
                  const targetX = calculatedMeshPosition.leftMeshPosition;
            
                  meshRef.current.position.set(targetX, targetY, 0);
                },
                [calculatedMeshPosition.leftMeshPosition, calculatedMeshPosition.topMeshPosition]
              );
      
              useFrame(() => {
                updateShaderUniforms(scrollY.get());
              });

    return(
    <mesh ref={meshRef}>
        <planeGeometry args={[ctxPage?.experienceSectionRect?.width, ctxPage?.experienceSectionRect?.height, 1,1]}></planeGeometry>
        <shaderMaterial fragmentShader={fragmentShader} vertexShader={vertexShader}></shaderMaterial>
    </mesh>
    )
};

export default ShaderExperiencePixelTransition;