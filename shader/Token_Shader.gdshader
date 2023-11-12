shader_type canvas_item;
uniform sampler2D tex_frg_2;


uniform vec4 outline_color:source_color = vec4(1.0,1.0,0.0,1.0);
uniform float inner_circle=0.45;
uniform float outer_circle=0.5;

uniform vec4 shadow_color:source_color = vec4(0.0,0.0,0.0,1.0);
uniform float inner_shadow= 0.35;
uniform float outer_shadow= 0.6;

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
	float outline_smoothness = smoothness;
    vec2 shadow_uv = UV-vec2(0.5,0.5);
    float shadow_dist = length(shadow_uv);

    vec4 shadow = mix(alpha_color, shadow_color, smoothstep(inner_shadow - outline_smoothness, inner_shadow + outline_smoothness, shadow_dist));
    shadow = mix(shadow, alpha_color, smoothstep(outer_shadow-smoothness,outer_shadow+outline_smoothness,shadow_dist));


// Cicle

	vec2 origin = UV-vec2(0.5,0.5);
	float dist =length(origin);
	
	vec2 uv_offset = vec2(uvm_x, uvm_y);
	vec4 _color= mix (texture(tex_frg_2,(UV * uv_scale) - uv_offset), outline_color,smoothstep(inner_circle-smoothness,inner_circle+smoothness,dist));
	vec4 circle_color = mix (_color,alpha_color,smoothstep(outer_circle-smoothness,outer_circle+smoothness,dist));

	
	COLOR = mix (circle_color, shadow,shadow.a);//shadow.a +

// Output:0
//	COLOR.rgb = n_out2p0;

}

void light() {
// Output:0

}
