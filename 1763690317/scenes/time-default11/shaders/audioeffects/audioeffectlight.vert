
uniform mat4 g_ModelViewProjectionMatrix;

attribute vec3 a_Position;
attribute vec2 a_TexCoord;
attribute vec3 a_Normal;
attribute vec4 a_Color;

uniform float g_LightWidth;

varying vec3 v_LocalPos;
varying vec2 v_TexCoord;
varying vec3 v_Normal;
varying vec4 v_color;

uniform float g_WaveSpeed; // {"material":"Speed","default":0.4}

void main() {

	gl_Position = mul(vec4(a_Position + g_LightWidth * vec3(a_Normal.xy,0.0), 1.0), g_ModelViewProjectionMatrix);

	v_Normal = normalize(a_Normal);

	v_LocalPos = a_Position;
	v_TexCoord.xy = a_TexCoord;
	v_color = a_Color;

}
