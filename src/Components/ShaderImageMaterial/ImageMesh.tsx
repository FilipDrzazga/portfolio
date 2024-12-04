import { useRef, useMemo } from "react";
import * as THREE from 'three';
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { useControls } from 'leva';

import image from "../../Images/face_original.jpg";
import displacement from '../../Images/textures/Turbulence 4 - 512x512.png'

const vertexShader = `

varying vec2 vUv;

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;

  vUv = uv;
}`;

const fragmentShader = `

varying vec2 vUv;

uniform sampler2D u_imageTexture;
uniform sampler2D u_displacementTexture;
uniform float u_progress;

void main() {

  vec4 displacementTexture = texture(u_displacementTexture,vUv);
  vec2 displacementUV = vec2(vUv.x,vUv.y);
  displacementUV.y = mix(vUv.y,displacementTexture.r,u_progress);

  vec4 imageTexture = texture(u_imageTexture, displacementUV);

  gl_FragColor = vec4(imageTexture);
}`;

const ShaderImageMaterial = () => {
  const imageTexture = useTexture(image);
  const displacementTexture = useTexture(displacement)
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if(meshRef.current){
      (meshRef.current.material as THREE.ShaderMaterial).uniforms.u_progress.value = progress;
    }
  });

  const options = useMemo(() => {
    return {
      progress: { value: 0, min: 0, max: 1, step: 0.01 },
    }
  }, []);

  const { progress } = useControls(options);

  const uniforms = useMemo(
    () => ({
      u_imageTexture: { value: imageTexture },
      u_displacementTexture: { value: displacementTexture},
      u_progress: {value:progress},
    }),
    [imageTexture]
  );

  return (
    <mesh ref={meshRef} position={[0.55, 1.3, 0]}>
      <planeGeometry args={[3, 4, 32, 32]} />
      <shaderMaterial fragmentShader={fragmentShader} vertexShader={vertexShader} uniforms={uniforms} />
    </mesh>
  );
};

export default ShaderImageMaterial;
