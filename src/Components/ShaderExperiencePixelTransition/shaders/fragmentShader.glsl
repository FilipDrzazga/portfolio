varying vec2 vUv;

uniform float u_black;
uniform float u_white;
uniform float u_progress;

float random(vec2 st){
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

void main() {
    vec2 gridSize = vec2(20.0);
    vec2 squareSize = vec2(4.) / gridSize;
    vec2 gridUV = floor(vUv / squareSize);

    float randomSquare = random(gridUV);

    vec3 color = mix(vec3(u_black), vec3(u_white), step(randomSquare, u_progress));



    gl_FragColor = vec4(color, 1.0); 

}