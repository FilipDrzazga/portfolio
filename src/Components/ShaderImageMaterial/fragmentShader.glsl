`
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
}`