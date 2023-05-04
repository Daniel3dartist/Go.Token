shader_type canvas_item;
uniform sampler2D tex_frg_2;

uniform vec4 outline_color:hint_color = vec4(1.0, 1.0, 0.0, 1.0);
uniform float inner_circle = 0.45;
uniform float outer_circle = 0.5;

uniform vec4 shadow_color:hint_color = vec4(0.0, 0.0, 0.0, 1.0);
uniform float inner_shadow = 0.35;
uniform float outer_shadow = 0.6;

uniform float uvs_x;
uniform float uvs_y;

uniform float uvm_x;
uniform float uvm_y;

const vec4 alpha_color = vec4(0, 0, 0, 0);

uniform float smoothness = 0.01;
uniform float shadow_smoothness = 0.01;

uniform float shadow_size = 0.025; // tamanho da sombra
uniform float shadow_offset_x = 0.01; // offset horizontal da sombra
uniform float shadow_offset_y = 0.01; // offset vertical da sombra

void vertex() {
    // Output:0
}

void fragment() {
    // Texture:2
    vec2 uv_scale = vec2(uvs_x, uvs_y);
    vec4 tex_frg_2_read = texture(tex_frg_2, UV * uv_scale);
    vec3 n_out2p0 = tex_frg_2_read.rgb;
    float n_out2p1 = tex_frg_2_read.a;

    // Círculo
    vec2 origin = UV - vec2(0.5, 0.5);
    float dist = length(origin);

    vec4 circle_color = mix(texture(tex_frg_2, (UV * uv_scale) - vec2(uvm_x, uvm_y)), outline_color, smoothstep(inner_circle - smoothness, inner_circle + smoothness, dist));

    // Sombra
    vec2 shadow_uv = UV - vec2(0.5, 0.5) + vec2(shadow_offset_x, shadow_offset_y);
    float shadow_dist = length(shadow_uv);

    vec4 shadow = mix(alpha_color, shadow_color, smoothstep(inner_shadow - shadow_smoothness, inner_shadow + shadow_smoothness, shadow_dist));
    shadow = mix(shadow, alpha_color, smoothstep(outer_shadow - shadow_smoothness, outer_shadow + shadow_smoothness, shadow_dist - shadow_size));

    // Combinando círculo e sombra
    vec4 final_color = mix(circle_color, shadow, shadow.a);

    COLOR = final_color;
}

void light() {
    // Output:0
}