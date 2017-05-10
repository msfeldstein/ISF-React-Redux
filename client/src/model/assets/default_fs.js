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
		}
	]
}*/

void main() {
	gl_FragColor = vec4(isf_FragNormCoord.x, isf_FragNormCoord.y, 1.0, 1.0);
}
`