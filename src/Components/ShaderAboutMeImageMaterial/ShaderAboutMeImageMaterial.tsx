import { useMemo, useCallback, useRef, useContext } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { PageContext } from "../../context/PageContext";
import { useScroll } from "framer-motion";
import { useControls } from 'leva'

import fragmentShader from './shaders/fragmentShader.glsl?raw';
import vertexShader from "./shaders/vertexShader.glsl?raw";

import image from "../../Images/mobile_man_face.jpg";

const ShaderAboutMeImageMaterial = ()=>{
    const ctxPage = useContext(PageContext);
    const meshRef = useRef<THREE.Mesh>(null!);

    const uniformsOptions = {
      numSegments: {
        value: 7.0,
        min: 0.0,
        max: 100.0,
        step: 1.0,},
        inputOutputRatio:{
          value: 1.0,
          min: 0.0,
          max: 10.0,
          step: 0.1,
        },
        overlap:{
          value: 0.0,
          min: 0.0,
          max: 10.0,
          step: 0.1,
        },
        light_strength:{
          value: 0.1,
          min: 0.0,
          max: 10.0,
          step: 0.1,
        }
    };

    const { scrollY } = useScroll();
    const { numSegments, inputOutputRatio, overlap, light_strength } = useControls(uniformsOptions);

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
            u_numSegments:{value: 0.0},
            u_inputOutputRatio:{value: 0.0},
            u_overlap:{value: 0.0},
            u_light_strength: { value: 0.0 },
          }),
          [imageTexture]
        );

        const updateShaderUniforms = useCallback(
          (scrollYValue: number, numSegments:number, inputOutputRatio:number,overlap:number, light_strength:number) => {
            if (!meshRef.current) return;
            const shaderMaterial = meshRef.current.material as THREE.ShaderMaterial;
            const { uniforms: shaderUniforms } = shaderMaterial;
      
            shaderUniforms.u_numSegments.value = numSegments;
            shaderUniforms.u_inputOutputRatio.value = inputOutputRatio;
            shaderUniforms.u_overlap.value = overlap;
            shaderUniforms.u_light_strength.value = light_strength;
            const targetY = scrollYValue + calculatedMeshPosition.topMeshPosition;
            const targetX = calculatedMeshPosition.leftMeshPosition;
      
            meshRef.current.position.set(targetX, targetY, 0);
          },
          [calculatedMeshPosition.leftMeshPosition, calculatedMeshPosition.topMeshPosition]
        );

        useFrame(() => {
          updateShaderUniforms(scrollY.get(), numSegments, inputOutputRatio,overlap,light_strength);
        });


    return(
        <mesh ref={meshRef}>
            <planeGeometry args={[ctxPage?.aboutMeImgRect?.width, ctxPage?.aboutMeImgRect?.height, 1,1]}></planeGeometry>
            <shaderMaterial fragmentShader={fragmentShader} vertexShader={vertexShader} uniforms={uniforms}></shaderMaterial>
        </mesh>
    )
};

export default ShaderAboutMeImageMaterial;