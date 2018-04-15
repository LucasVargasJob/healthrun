module.exports = function(grunt) {
	'use strict';

    grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			dist: {
				files: [{
					expand: true,
					cwd: 'sources/_scss',
					src: ['style.scss'],
					dest: './public/stylesheets/',
					ext: '.css'
			  	}]
			}
		},

        copy: {
            image: {
                files: [
                    {
                        filter: 'isFile',
                        flatten: true,
                        expand: true,
                        src: [
                            './sources/_img/**',
                        ],
                        dest: './dist/images/'
                    }
                ],
            },
            js: {
                files: [
                    {
                        filter: 'isFile',
                        flatten: true,
                        expand: true,
                        src: [
                            './sources/_js/context.js',
                        ],
                        dest: './public/javascripts'
                    }
                ],
            }
        },

        jshint: {
            all: [
                './sources/_js/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        concat: {
            js: {
                files: {
                    './public/javascripts/concated.js': [
                        './sources/_js/*.js',
                        '!./sources/_js/context.js'
                    ],

                    './public/javascripts/context.js': [
                        './public/javascripts/concated.js',
                        './sources/_js/context.js'
                    ]
                }
            }
        }
	});


	// NEWEST and dinamic modules load
	require('load-grunt-tasks')(grunt);


  	// Default task(s).
 	grunt.registerTask('default', [
        'jshint',
        'sass',
        'copy:image',
        'concat:js'
    ]);
};
