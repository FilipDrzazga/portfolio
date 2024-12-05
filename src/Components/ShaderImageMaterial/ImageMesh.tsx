import { useState, useRef, useMemo } from "react";
import * as THREE from "three";
import { useFrame, type ThreeEvent } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { useControls } from "leva";

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

void main() {

  vec2 mouse = vec2(u_mouse.x, u_mouse.y);

  float dist = distance(vUv, mouse);

  vec2 noiseUV = vUv * 1.0; // Scale noise UV, higher value means smaller noise patterns
  float noise = texture2D(u_displacementTexture, noiseUV).r;

  float falloff = exp(-dist * 8.0); // Decrease the multiplier for a slower fade

  // Displace each color channel differently for a chromatic aberration effect
  vec2 redUV = mix(vUv,vUv + noise * 0.9 * falloff, 1.0 - u_decay);
  vec2 greenUV = mix(vUv,vUv + noise * 0.25 * falloff, 1.0 - u_decay);
  vec2 blueUV = mix(vUv,vUv + noise * 0.3 * falloff, 1.0 - u_decay);

  vec4 red = texture2D(u_imageTexture, redUV);
  vec4 green = texture2D(u_imageTexture, greenUV);
  vec4 blue = texture2D(u_imageTexture, blueUV);

  gl_FragColor = vec4(red.r, green.g, blue.b, 1.0);
}`;

const ShaderImageMaterial = () => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const meshRef = useRef<THREE.Mesh>(null);
  const mousePosRef = useRef<THREE.Vector2>(new THREE.Vector2(9999, 9999));
  const imageTexture = useTexture(image);
  const displacementTexture = useTexture(displacement);

  useFrame((state, delta) => {
    if (meshRef.current) {
      (meshRef.current.material as THREE.ShaderMaterial).uniforms.u_time.value = state.clock.getElapsedTime();
      (meshRef.current.material as THREE.ShaderMaterial).uniforms.u_progress.value = progress;
      (meshRef.current.material as THREE.ShaderMaterial).uniforms.u_mouse.value = mousePosRef.current;

      (meshRef.current.material as THREE.ShaderMaterial).uniforms.u_decay.value = THREE.MathUtils.lerp(
        (meshRef.current.material as THREE.ShaderMaterial).uniforms.u_decay.value,
        isMouseOver ? 0.0 : 1.0,
        delta * 2
      );
    }
  });

  const options = useMemo(() => {
    return {
      progress: { value: 0, min: 0, max: 1, step: 0.01 },
    };
  }, []);

  const { progress } = useControls(options);

  const uniforms = useMemo(
    () => ({
      u_imageTexture: { value: imageTexture },
      u_displacementTexture: { value: displacementTexture },
      u_progress: { value: progress },
      u_mouse: { value: new THREE.Vector2() },
      u_time: { value: 0 },
      u_decay: { value: 1.0 },
    }),
    [imageTexture, displacementTexture, progress]
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
