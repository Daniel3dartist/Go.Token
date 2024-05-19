shader_type canvas_item;

uniform vec2 center : hint_range(0.0, 1.0) = vec2(0.5, 0.5);
uniform float radius : hint_range(0.0, 1.0) = float(0.5);

void fragment() {
    vec2 uv = FRAGCOORD.xy / SCREEN_PIXEL_SIZE;
    float dist = distance(uv, center);
    
    if (dist > radius) {
        discard;
    }
}

