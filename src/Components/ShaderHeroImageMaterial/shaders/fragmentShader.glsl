varying vec2 vUv;

uniform sampler2D u_imageTexture;
uniform float u_gridSize;
uniform float u_squareSize;
uniform float u_displacementStrength;

// Uniforms for timing and base color:
uniform float u_time;             // Elapsed time (in seconds).
uniform vec4 u_baseColor;         // Color shown before the texture appears.
uniform float u_maxDelay;         // Maximum random delay for any square.
uniform float u_fadeDuration;     // Duration over which each square fades in.
uniform float u_dispFadeDuration; // Duration over which displacement fades to 0 after full grid is visible.

// New uniform: only squares with a random value above this threshold will be visible.
uniform float u_visibilityThreshold; // e.g. 0.5 for 50% chance

void main() {
    // --- Grid Calculation ---
    vec2 gridSize = vec2(u_gridSize);
    vec2 squareSize = vec2(u_squareSize) / gridSize;
    vec2 squareIndex = floor(vUv / squareSize);

    // Generate a pseudo-random value based on the square's index.
    float randomSquare = sin(dot(squareIndex, vec2(12.9898, 78.233))) * 43758.5453;
    float randValue = fract(randomSquare); // Range: 0.0 - 1.0

    // --- Random Displacement ---
    vec2 randomSquareOffset = vec2(fract(sin(randomSquare) * 1000.0),
                                   fract(cos(randomSquare) * 1000.0)) - 0.5;

    // Animate the displacement fade out.
    float dispFadeStart = u_maxDelay + u_fadeDuration;
    float dispFadeFactor = 1.0 - smoothstep(dispFadeStart, dispFadeStart + u_dispFadeDuration, u_time);
    vec2 displacement = randomSquareOffset * u_displacementStrength * dispFadeFactor;
    vec2 finalDisplacement = randomSquareOffset * u_displacementStrength;
    
    // vec2 finalDisplacement = mix(displacement, vec2(0.0), u_displacementStrength);
    vec2 displacedUV = vUv + finalDisplacement;

    // Sample the texture with displaced UVs.
    vec4 textureColor = texture2D(u_imageTexture, displacedUV);

    // --- Fade-In Animation with Random Delay ---
    // Only allow squares with randValue above the visibility threshold to fade in.
    float isVisible = step(u_visibilityThreshold, randValue); // 1.0 if randValue >= threshold, 0.0 otherwise.
    
    // Each square gets its own delay based on its random value.
    float delay = randValue * u_maxDelay;
    float t = smoothstep(delay, delay + u_fadeDuration, u_time);
    
    // If the square isn’t chosen to be visible, it will remain at the base color.
    t *= isVisible;
    
    // Mix between the base color and the texture color based on the fade-in factor.
    vec4 finalColor = mix(u_baseColor, textureColor, t);

    gl_FragColor = finalColor;
}
