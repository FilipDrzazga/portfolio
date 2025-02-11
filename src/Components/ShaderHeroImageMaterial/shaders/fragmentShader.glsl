varying vec2 vUv;

uniform sampler2D u_imageTexture;
uniform float u_gridSize;
uniform float u_squareSize;
uniform float u_displacementStrength;

// Uniforms for timing and base color:
uniform float u_time;           // The elapsed time in seconds.
uniform vec4 u_baseColor;       // The color to show before the texture appears.
uniform float u_maxDelay;       // Maximum random delay (in seconds) for any square.
uniform float u_fadeDuration;   // Duration over which each square fades in.
uniform float u_dispFadeDuration;  // Duration over which displacement fades to 0 after full grid is visible.

void main() {
    // Determine grid information.
    vec2 gridSize = vec2(u_gridSize);
    vec2 squareSize = vec2(u_squareSize) / gridSize;
    vec2 squareIndex = floor(vUv / squareSize);

    // Generate a random value from the square index.
    float randomSquare = sin(dot(squareIndex, vec2(12.9898, 78.233))) * 43758.5453;

    // Compute a random displacement offset.
    vec2 randomSquareOffset = vec2(fract(sin(randomSquare) * 1000.0),
                                   fract(cos(randomSquare) * 1000.0)) - 0.5;

    // --- Animate Displacement Fade Out ---
    // Determine when the grid is fully visible.
    float dispFadeStart = u_maxDelay + u_fadeDuration;
    // Calculate a factor that is 1.0 until dispFadeStart, then smoothly goes to 0 over u_dispFadeDuration.
    float dispFadeFactor = 1.0 - smoothstep(dispFadeStart, dispFadeStart + u_dispFadeDuration, u_time);
    
    // Apply the animated displacement strength.
    vec2 displacement = randomSquareOffset * u_displacementStrength * dispFadeFactor;
    vec2 displacedUV = vUv + displacement;
    
    // Sample the texture with the displaced UVs.
    vec4 textureColor = texture2D(u_imageTexture, displacedUV);

    // --- Fade-In of Each Grid Square ---
    // Compute a delay (per square) for the fade-in.
    float delay = fract(randomSquare) * u_maxDelay;
    // Smoothly transition from 0 to 1 starting at 'delay' and over u_fadeDuration.
    float t = smoothstep(delay, delay + u_fadeDuration, u_time);
    // Blend between the base color and the texture color.
    vec4 finalColor = mix(u_baseColor, textureColor, t);

    gl_FragColor = finalColor;
}
