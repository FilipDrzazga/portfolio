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
float mouseEffect = exp(-mouseDist * 5.0) * (1.0 - u_decay);

float lineWidth = 0.5;

float progressLine = smoothstep(u_progress - lineWidth, u_progress, 1.0 - vUv.y) * smoothstep(u_progress + lineWidth, u_progress, 1.0 - vUv.y);

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
}