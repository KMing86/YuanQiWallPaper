
// [COMBO] {"material":"ui_editor_properties_layout","combo":"LAYOUT","type":"options","default":0}
// [COMBO] {"material":"ui_editor_properties_direction","combo":"DIRECTION","type":"options","default":0}
// [COMBO_OFF] {"material":"ui_editor_properties_Block","combo":"BLOCK","type":"options","default":0}

#include "common.h"

uniform sampler2D g_Texture0;
uniform sampler2D g_Texture1;

uniform vec4 g_params;

varying vec3 v_LocalPos;
varying vec2 v_TexCoord;
varying vec2 v_TexCoord2;
varying vec4 v_color;

void main()
{
	vec4 color = v_color;
	
#if DIRECTION == 0
	vec2 uv = v_TexCoord;
	color = texSample2D(g_Texture0, uv);
	color.a *= v_color.a; 
#endif

#if DIRECTION == 1
	vec2 uv = abs(v_TexCoord.yx);
	color = texSample2D(g_Texture0, uv);
	color.a *= v_color.a; 
#endif

	vec4 abldo = vec4(1.0, 1.0, 1.0, 1.0);
#if BLOCK == 1
	vec2 uv2 = frac(v_TexCoord2);
	uv2.y = 1.0 - abs(uv2.y);
	float tep = step(uv2.y, g_params.x);
	uv2.y *= g_params.y;
	abldo = texSample2D(g_Texture1, uv2) * tep;
#endif	

#if BLOCK == 2
	vec2 uv2 = v_TexCoord2;
	abldo = texSample2D(g_Texture1, uv2);
#endif	
	gl_FragColor = color * abldo;
}