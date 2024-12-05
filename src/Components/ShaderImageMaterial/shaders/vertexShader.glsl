#define PI 3.1415926
#define PI2 PI*2.0

varying vec2 vUv;

uniform float u_time;

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  modelPosition.z += sin((length(uv - 0.5) - u_time * 0.5) * 0.9 * PI2) * 0.05;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;

  vUv = uv;
}