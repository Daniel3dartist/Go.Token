shader_type canvas_item;
render_mode blend_mix;

const float smoothness=0.003;
const float inner_alpha= 0.47;
const float outer_alpha= 0.0;

const vec4 alpha_color= vec4(0.0,0.0,0.0,1.0);

uniform sampler2D tex_frg_6 : source_color;



void fragment() {
// Texture2D:6
	vec4 n_out6p0 = texture(tex_frg_6, UV);

// Border
	float outline_smoothness = smoothness;
    vec2 alpha_uv = UV-vec2(0.5,0.5);
    float alpha_dist = length(alpha_uv);

    vec4 out_alpha = mix(alpha_color, vec4(0,0,0,0), smoothstep(inner_alpha - outline_smoothness, inner_alpha + outline_smoothness, alpha_dist));
    //out_alpha = mix(out_alpha, alpha_color, smoothstep(outer_alpha-smoothness,outer_alpha+outline_smoothness,alpha_dist));


// Output:0
	COLOR.a = out_alpha.a;


}
