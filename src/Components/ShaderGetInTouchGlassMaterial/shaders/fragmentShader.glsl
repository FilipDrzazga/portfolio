varying vec2 vUv;

uniform vec2 mouse;        // Mouse position (normalized 0 to 1)
uniform float time;        // Time for animation

// Helper function: Generate random noise
float random(vec2 uv) {
    return fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453);
}

// Helper function: Smoothstep easing
float easeOutExpo(float x) {
    return (x == 1.0) ? 1.0 : 1.0 - pow(2.0, -10.0 * x);
}

void main() {
    // Normalize pixel coordinates (0 to 1)
    vec2 uv = fragCoord / resolution;

    // Grid settings
    float gridSize = 20.0;                      // Number of cells per row/column
    vec2 cellSize = resolution / gridSize;      // Size of each cell in pixels
    vec2 cellUV = floor(fragCoord / cellSize);  // Current cell position

    // Calculate the center of the current cell
    vec2 cellCenter = (cellUV + 0.5) * cellSize;

    // Normalize the mouse position to screen space
    vec2 mousePos = mouse * resolution;

    // Offset the cell center based on mouse distance
    vec2 offset = cellCenter - mousePos;
    float dist = length(offset) / resolution.x; // Distance normalized to screen size
    vec2 movement = normalize(offset) * easeOutExpo(1.0 - dist) * 10.0;

    // Add slight movement and easing back
    cellCenter += movement * sin(time * 2.0) * 0.5;

    // Generate local UV within the cell
    vec2 localUV = (fragCoord - cellCenter) / cellSize;

    // Generate noise based on local UV
    float noiseValue = random(cellUV + localUV + vec2(time * 0.1));
    vec3 color = vec3(noiseValue * 0.5 + 0.5); // Map noise to color

    // Add color variation
    color = mix(color, vec3(1.0, 0.5, 0.2) * color, 0.6);

    // Output the color
    fragColor = vec4(color, 1.0);
}