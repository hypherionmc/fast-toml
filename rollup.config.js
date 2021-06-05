import { terser as minifier } from 'rollup-plugin-terser'

export default {
	input: 'src/main.js',
	plugins: [
		minifier()
	],
	output: {
		intro: '\nlet source = "", position = 0;',

		// TODO Uncomment this if you need to build a NODE version

		/*
		format: 'cjs',
		file: 'dist/node/fast-toml.js',
		*/

		// TODO Uncomment this if you need to build a browser version


		format: 'iife',
		file: 'dist/browser/fast-toml.js',
		name: 'TOML'

 	}
}
