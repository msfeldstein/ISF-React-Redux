export default `/*{
	"CREDIT": "by You",
	"DESCRIPTION": "",
	"CATEGORIES": [
		"XXX"
	],
	"INPUTS": [
		{
			"NAME": "pointInput",
			"TYPE": "point2D",
			"DEFAULT": [
				0,
				0
			]
		},
		{
			"NAME" : 		"green",
			"TYPE" : 		"float",
			"DEFAULT" : 	0.3,
			"MIN" : 		0.0,
			"MAX" : 		1.0
		},
		{
			"NAME": 		"dostuff",
			"TYPE": 		"bool",
			"DEFAULT": 		0
		}
	]
}*/

void main() {
		float r = 1.0 - pow(distance(
			isf_FragNormCoord.xy,
			pointInput
		), 2.0);
  		float b = abs(sin(TIME));
  		if (dostuff) b = abs(sin(TIME + isf_FragNormCoord.x * 100.0));
		gl_FragColor = vec4(
			r,
			green,
			b,
			1.0);
}
`