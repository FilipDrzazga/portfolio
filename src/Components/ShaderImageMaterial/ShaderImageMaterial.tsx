import { useState,useEffect, useRef, useMemo } from "react";
import * as THREE from "three";
import { useFrame, type ThreeEvent } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
// import { useControls } from "leva";

import image from "../../Images/face_original1.jpg";
import displacement from "../../Images/textures/melt 6 - 512x512.png";

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
uniform vec2 u_mouse;
uniform float u_time;
uniform float u_decay;

float hash(vec2 p){
  return fract(sin(dot(p, vec2(127.1, 311.7)))*43758.5453123);
}

float interpNoise(vec2 p){
  vec2 i = floor(p);
  vec2 f = floor(p);

  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));

  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

void main() {

vec4 noise = texture2D(u_displacementTexture, vUv);

float mouseDist = distance(vUv, u_mouse);
float mouseEffect = exp(-mouseDist * 8.0) * (1.0 - u_decay);

float lineWidth = 0.3;

float progressLine = smoothstep(u_progress - lineWidth, u_progress, vUv.y) * smoothstep(u_progress + lineWidth, u_progress, vUv.y);

float totalEffect = max(mouseEffect, progressLine);

vec2 distortedUV = vUv + noise.rg * totalEffect * 0.1;

vec2 redUV = distortedUV - noise.rg * totalEffect * 0.09;
vec2 greenUV = distortedUV + noise.rg * totalEffect  * 0.05;
vec2 blueUV = distortedUV + noise.rg * totalEffect * 0.01;

float r = texture2D(u_imageTexture, redUV).r;
float g = texture2D(u_imageTexture, greenUV).g;
float b = texture2D(u_imageTexture, blueUV).b;

vec3 color = vec3(r, g, b);

gl_FragColor = vec4(color, 1.0);
}`;

const ShaderImageMaterial = () => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [isEffectDistortion, setIsEffectDistortion] = useState(false);

  const meshRef = useRef<THREE.Mesh>(null);
  const mousePosRef = useRef<THREE.Vector2>(new THREE.Vector2(9999, 9999));

  const imageTexture = useTexture(image);
  const displacementTexture = useTexture(displacement);

  const effectDuration = 1.5;

  useFrame((state, delta) => {
    if (meshRef.current) {// vec4 imageColor = texture2D(u_imageTexture, distortedUV);
      const shaderMaterialUniforms = (meshRef.current.material as THREE.ShaderMaterial).uniforms;

      shaderMaterialUniforms.u_time.value = state.clock.getElapsedTime();
      shaderMaterialUniforms.u_mouse.value = mousePosRef.current;

      shaderMaterialUniforms.u_decay.value = THREE.MathUtils.lerp(
        shaderMaterialUniforms.u_decay.value,
        isMouseOver ? 0.0 : 1.0,
        delta * 2
      );

      if(isEffectDistortion){
        shaderMaterialUniforms.u_progress.value += delta / effectDuration;

        if(shaderMaterialUniforms.u_progress.value > 3.0){
          shaderMaterialUniforms.u_progress.value = -0.5;
          setIsEffectDistortion(false);
        }
      };
    }
  });

  // const options = useMemo(() => {
  //   return {
  //     progress: { value: 0, min: 0, max: 1, step: 0.01 },
  //   };
  // }, []);

  // const { progress } = useControls(options);

  const uniforms = useMemo(
    () => ({
      u_imageTexture: { value: imageTexture },
      u_displacementTexture: { value: displacementTexture },
      u_progress: { value: 0},
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

  useEffect(()=>{
    if(meshRef.current){
      setIsEffectDistortion(true);
    };
    const interval = setInterval(()=>{
      setIsEffectDistortion(true);
    },10000)

    return ()=> clearInterval(interval);
  },[]);

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
