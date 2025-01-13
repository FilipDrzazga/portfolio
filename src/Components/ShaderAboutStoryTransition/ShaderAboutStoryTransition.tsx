import { useEffect, useRef, useMemo, useCallback } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { type MotionValue } from "framer-motion";

interface ShaderAboutStoryTransitionProps {
   readonly positionRect:{ [key: string]: number | undefined };
   readonly scrollY: MotionValue<number>;
}

const ShaderAboutStoryTransition = ({positionRect:{ geometryWidth, geometryHeight, topMeshPos, leftMeshPos },scrollY}:ShaderAboutStoryTransitionProps)=>{
const meshRef = useRef<THREE.Mesh>(null!);

const calculatedMeshPosition = useMemo(() => {
    if (topMeshPos && leftMeshPos !== undefined && leftMeshPos !== null && geometryHeight && geometryWidth) {
    return {
        topMeshPosition: -topMeshPos + window.innerHeight / 2 - geometryHeight / 2,
        leftMeshPosition: leftMeshPos - window.innerWidth / 2 + geometryWidth / 2,
    };
    }
    return { topMeshPosition: 0, leftMeshPosition: 0 };
}, [topMeshPos, leftMeshPos, geometryHeight, geometryWidth]);

  const updateShaderUniforms = useCallback(
    (scrollYValue: number) => {
      if (!meshRef.current) return;

      const targetY = scrollYValue  + calculatedMeshPosition.topMeshPosition;
      const targetX = calculatedMeshPosition.leftMeshPosition;

      meshRef.current.position.set(targetX, targetY, 0);
    },
    [calculatedMeshPosition.leftMeshPosition, calculatedMeshPosition.topMeshPosition]
  );

useFrame((state, delta) => {
    updateShaderUniforms(scrollY.get());
});

    return(
        <mesh ref={meshRef}>
            <planeGeometry args={[geometryWidth,geometryHeight,32,32]}/>
            <shaderMaterial wireframe/>
        </mesh>
    );
};

export default ShaderAboutStoryTransition;