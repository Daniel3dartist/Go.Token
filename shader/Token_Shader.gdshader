shader_type canvas_item;
uniform sampler2D tex_frg_2;


uniform vec4 inner_cicler_color:source_color = vec4(1.0,1.0,0.0,1.0);
uniform float inner_circle=0.45;
uniform float outer_circle=0.5;

uniform vec4 outline_color:source_color = vec4(0.0,0.0,0.0,1.0);
uniform float inner_outline= 0.49;
uniform float outer_outline= 0.5;

uniform float uvs_x;
uniform float uvs_y;

uniform float uvm_x;
uniform float uvm_y;

const vec4 alpha_color= vec4(0,0,0,0);

const float smoothness=0.003;

void vertex() {
// Output:0

}



void fragment() {

// Texture:2
	vec2 uv_scale = vec2(uvs_x, uvs_y);
	vec4 tex_frg_2_read = texture(tex_frg_2, UV * uv_scale);
	vec3 n_out2p0 = tex_frg_2_read.rgb;
	float n_out2p1 = tex_frg_2_read.a;

// Shadow
	float outline_cicle_smoothness = smoothness;
    vec2 outline_uv = UV-vec2(0.5,0.5);
    float outline_dist = length(outline_uv);

    vec4 outline = mix(alpha_color, outline_color, smoothstep(inner_outline - outline_cicle_smoothness, inner_outline + outline_cicle_smoothness, outline_dist));
    outline = mix(outline, alpha_color, smoothstep(outer_outline-smoothness,outer_outline+outline_cicle_smoothness,outline_dist));


// Cicle

	vec2 origin = UV-vec2(0.5,0.5);
	float dist =length(origin);

	vec2 uv_offset = vec2(uvm_x, uvm_y);
	vec4 _color= mix (texture(tex_frg_2,(UV * uv_scale) - uv_offset), inner_cicler_color,smoothstep(inner_circle-smoothness,inner_circle+smoothness,dist));
	vec4 circle_color = mix (_color,alpha_color,smoothstep(outer_circle-smoothness,outer_circle+smoothness,dist));


	COLOR = mix (circle_color, outline,outline.a);//shadow.a +

// Output:0
//	COLOR.rgb = n_out2p0;

}

void light() {
// Output:0

}
