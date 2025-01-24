varying vec2 vUv;

uniform sampler2D u_imageTexture;

void main() {
    vec3 texture = texture2D(u_imageTexture,vUv).rgb;

    gl_FragColor = vec4(texture,1.0);
}