varying vec2 vUv;

uniform sampler2D u_imageTexture;
uniform float u_gridSize;
uniform float u_squareSize;
uniform float u_displacementStrength;

void main() {

    vec2 gridSize = vec2(u_gridSize);
    vec2 squareSize = vec2(u_squareSize) / gridSize;
    vec2 squareIndex = floor(vUv / squareSize);
    vec2 squareCenter = (squareIndex + 0.5) * squareSize;

    float randomSquare = sin(dot(squareIndex, vec2(12.9898, 78.233))) * 43758.5453;
    vec2 randomSquareOffset = vec2(fract(sin(randomSquare)* 1000.0), fract(cos(randomSquare)* 1000.0)) - 0.5;

    float displacementStrength = u_displacementStrength;

    vec2 displacement = randomSquareOffset * displacementStrength;

    vec2 displacedUV = vUv + displacement;

    vec4 color = texture(u_imageTexture, displacedUV);

    gl_FragColor = vec4(color); 

}