varying vec2 vUv;

uniform sampler2D u_imageTexture;

void main() {
  vec4 noise = texture2D(u_imageTexture, vUv);

  gl_FragColor = vec4(noise);
}