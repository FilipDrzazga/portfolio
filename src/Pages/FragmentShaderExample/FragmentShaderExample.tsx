import { OrbitControls } from "@react-three/drei";
import fragmentShader from "./shaders/fragmentShader.glsl";
import vertexShader from "./shaders/vertexShader.glsl";

function FragmentShaderExample() {
  return (
    <>
      <OrbitControls />
      <mesh>
        <planeGeometry args={[2, 2]} />
        <meshBasicMaterial />
      </mesh>
    </>
  );
}
s;
export default FragmentShaderExample;
