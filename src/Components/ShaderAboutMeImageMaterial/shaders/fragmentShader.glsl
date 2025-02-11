varying vec2 vUv;

uniform sampler2D u_imageTexture;
uniform float u_gridSize;
uniform float u_squareSize;
uniform float u_displacementStrength;

void main() {
    // Determine grid information.
    vec2 gridSize = vec2(u_gridSize);
    vec2 squareSize = vec2(u_squareSize) / gridSize;
    vec2 squareIndex = floor(vUv / squareSize);

    // Generate a random value based on the square index.
    float randomSquare = sin(dot(squareIndex, vec2(12.9898, 78.233))) * 43758.5453;

    // Compute a random displacement offset.
    vec2 randomSquareOffset = vec2(fract(sin(randomSquare) * 1000.0),
                                   fract(cos(randomSquare) * 1000.0)) - 0.5;

    // Animate the displacement strength based on scroll.
    // When u_scroll is 0.0: full displacement; when u_scroll is 1.0: no displacement.
    vec2 displacement = randomSquareOffset * u_displacementStrength;
    vec2 displacedUV = vUv + displacement;
    
    // Sample the texture at the displaced UV coordinates.
    vec4 color = texture2D(u_imageTexture, displacedUV);
    
    gl_FragColor = color;
}
