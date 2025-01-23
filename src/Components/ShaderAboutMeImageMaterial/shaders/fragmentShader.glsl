varying vec2 vUv;

uniform sampler2D u_imageTexture;

void main() {
    // Define the custom uniforms as constants or use ShaderToy's UI for uniforms
    const float u_numSegments = 10.0; // Number of segments
    const float u_inputOutputRatio = 1.2; // Ratio between input and output segments
    const float u_overlap = 0.6; // Overlap between segments
    const float u_light_strength = 0.2;

    float segmentWidth = 1.0 / u_numSegments;
    float inputSegmentWidth = segmentWidth * u_inputOutputRatio;
    float overlapWidth = segmentWidth * u_overlap;

    // Determine which segment we are in
    float segmentIndex = floor(vUv.x / segmentWidth);
    float segmentStart = segmentIndex * segmentWidth;
    float segmentEnd = segmentStart + segmentWidth;

    // Calculate the local uv within the segment
    float localUVx = (vUv.x - segmentStart) / segmentWidth;

    // Apply log compression to the x coordinate within the segment
    float compressedX = log(1.0 + localUVx * 9.0) / log(10.0);

    // Calculate the corresponding input UV
    float inputSegmentStart = segmentIndex * (inputSegmentWidth - overlapWidth);
    vec2 inputUV = vec2(inputSegmentStart + compressedX * inputSegmentWidth, vUv.y);

    // Get the color from the input image
    vec4 color = texture(u_imageTexture, inputUV);

    // Apply the vertical gradient
    float gradientMidpoint = 0.8;
    float gradientStrength = smoothstep(gradientMidpoint, 1.0, vUv.y);
    color = mix(color, vec4(0.0, 0.0, 0.0, 0.5), gradientStrength*0.5);
    
    // Apply the black gradient on the right side of each segment
    float rightGradientStrength = smoothstep(0.8, 1.0, localUVx);
    color = mix(color, vec4(0.0, 0.0, 0.0, rightGradientStrength), rightGradientStrength*u_light_strength);

    // Apply the white gradient on the left side of each segment
    float leftGradientStrength = smoothstep(0.1, 0.0, localUVx);
    color = mix(color, vec4(1.0, 1.0, 1.0, leftGradientStrength), leftGradientStrength*u_light_strength);

    gl_FragColor = vec4(color);
}