import { useRef, useMemo } from "react";
import { useTexture } from "@react-three/drei";

import image from '../../Images/face_original.jpg'

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
uniform sampler2D u_Imagetexture;

void main() {

  vec4 imageTexture = texture(u_Imagetexture, vUv);

  gl_FragColor = vec4(imageTexture);
}`;


const ShaderImageMaterial = () => {
  const imageTexture = useTexture(image);
  const meshRef = useRef(null);
  
  const uniforms = useMemo(()=>({
    u_Imagetexture: {value: imageTexture},
  }),[]);

  return (
    <mesh ref={meshRef} position={[0.55, 1.3, 0]}>
      <planeGeometry args={[3, 4, 32, 32]} />
      <shaderMaterial 
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms} 
      />
    </mesh>
  );
};

export default ShaderImageMaterial;