module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{json,ico,svg,html,png,txt,css,js,ttf}'
	],
	swDest: 'build/sw.js',
	swSrc: "src/sw-template.js",
};