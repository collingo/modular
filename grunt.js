module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		lint: {
			// all: ['grunt.js', 'wwwroot_dashboard/assets/script/**/*.js']
			all: ['grunt.js']
		},
		jshint: {
			options: {
				'bitwise': true,
				'camelcase': true,
				'curly': true,
				'eqeqeq': true,
				'forin': true,
				'immed': true,
				'indent': 4,
				'latedef': true,
				'newcap': true,
				'noarg': false,
				'noempty': true,
				'nonew': true,
				'plusplus': true,
				'quotmark': true,
				'regexp': true,
				'undef': true,
				'unused': true,
				'strict': false,
				'trailing': true,
				'boss': true,
				'debug': true,
				'eqnull': true,
				'es5': true,
				'esnext': true,
				'evil': true,
				'funcscope': true,
				'globalstrict': true,
				'iterator': true,
				'laxbreak': true,
				'proto': true,
				'scripturl': true,
				'supernew': true,
				'validthis': true,
				'browser': true,
				'jquery': true
			}
		},
		csslint: {
			base_theme: {
				src: ['wwwroot_dashboard/assets/style/ie/ie8.css'],
				rules: {
					'box-model': true,
					'display-property-grouping': true,
					'duplicate-properties': true,
					'empty-rules': true,
					'known-properties': true,
					'adjoining-classes': false,
					'box-sizing': true,
					'compatible-vendor-prefixes': true,
					'gradients': true,
					'text-indent': false,
					'vendor-prefix': true,
					'fallback-colors': true,
					'star-property-hack': true,
					'underscore-property-hack': true,
					'font-faces': false,
					'import': true,
					'regex-selectors': true,
					'universal-selector': true,
					'unqualified-attributes': true,
					'zero-units': true,
					'overqualified-elements': true,
					'shorthand': true,
					'duplicate-background-images': true,
					'floats': false,
					'font-sizes': false,
					'ids': false,
					'important': true,
					'outline-none': true,
					'qualified-headings': false,
					'unique-headings': false
				}
			}
		}
	});

	// load plugins
	grunt.loadNpmTasks('grunt-css');

	// define tasks
	grunt.registerTask('default', 'lint');

};