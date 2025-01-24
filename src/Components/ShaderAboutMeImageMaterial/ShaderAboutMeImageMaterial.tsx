import { useMemo, useCallback, useRef, useContext } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { PageContext } from "../../context/PageContext";
import { useScroll } from "framer-motion";

import fragmentShader from './shaders/fragmentShader.glsl?raw';
import vertexShader from "./shaders/vertexShader.glsl?raw";

import image from "../../Images/mobile_man_face.jpg";

const ShaderAboutMeImageMaterial = ()=>{
    const ctxPage = useContext(PageContext);
    const meshRef = useRef<THREE.Mesh>(null!);

    const { scrollY } = useScroll();

    const imageTexture = useTexture(image);

      const calculatedMeshPosition = useMemo(() => {
        if (ctxPage?.aboutMeImgRect?.top && ctxPage.aboutMeImgRect.left && ctxPage.aboutMeImgRect.height && ctxPage.aboutMeImgRect.width) {
          console.log(ctxPage?.aboutMeImgRect?.height)
          return {
            topMeshPosition: -ctxPage?.aboutMeImgRect?.top + window.innerHeight / 2 - ctxPage.aboutMeImgRect.height / 2,
            leftMeshPosition: ctxPage.aboutMeImgRect.left - window.innerWidth / 2 + ctxPage.aboutMeImgRect.width / 2,
          };
        }
        return { topMeshPosition: 0, leftMeshPosition: 0 };
      }, [ctxPage?.aboutMeImgRect?.top, ctxPage?.aboutMeImgRect?.left, ctxPage?.aboutMeImgRect?.height! , ctxPage?.aboutMeImgRect?.width]);

        const uniforms = useMemo(
          () => ({
            u_imageTexture: { value: imageTexture},
          }),
          [imageTexture]
        );

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
            <planeGeometry args={[ctxPage?.aboutMeImgRect?.width, ctxPage?.aboutMeImgRect?.height, 1,1]}></planeGeometry>
            <shaderMaterial fragmentShader={fragmentShader} vertexShader={vertexShader} uniforms={uniforms}></shaderMaterial>
        </mesh>
    )
};

export default ShaderAboutMeImageMaterial;