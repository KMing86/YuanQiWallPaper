
uniform mat4 g_ModelViewProjectionMatrix;

attribute vec3 a_Position;
attribute vec2 a_TexCoord;
attribute vec2 a_TexCoord2;
attribute vec4 a_Color;

varying vec3 v_LocalPos;
varying vec2 v_TexCoord;
varying vec2 v_TexCoord2;
varying vec4 v_color;

uniform float g_WaveSpeed; // {"material":"Speed","default":0.4}

void main() {

	gl_Position = mul(vec4(a_Position, 1.0), g_ModelViewProjectionMatrix);
	
	v_LocalPos = a_Position;
	v_TexCoord.xy = a_TexCoord;
	v_color = a_Color;
	v_TexCoord2.xy = a_TexCoord2;

}
