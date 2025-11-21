
// [COMBO] {"material":"ui_editor_properties_layout","combo":"LAYOUT","type":"options","default":0}
// [COMBO] {"material":"ui_editor_properties_direction","combo":"DIRECTION","type":"options","default":0}

#include "common.h"

uniform sampler2D g_Texture0;

uniform float g_LightAlpha;

varying vec3 v_LocalPos;
varying vec2 v_TexCoord;
varying vec3 v_Normal;
varying vec4 v_color;

void main()
{

	vec4 color = v_color;
#if DIRECTION == 0
	vec2 uv = v_TexCoord;
	color = texSample2D(g_Texture0, uv);
#endif

#if DIRECTION == 1
	vec2 uv = abs(v_TexCoord.yx);
	color = texSample2D(g_Texture0, uv);
#endif


	color.rgb *= 2.5;
	float alpha = (1.0 - distance(v_Normal.xy, vec2(0.0, 0.0)));
	color.a *= pow(alpha, 1.5) * g_LightAlpha; 
	gl_FragColor = color;
}