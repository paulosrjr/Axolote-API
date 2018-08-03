module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/* Minified JavasScript of <%= pkg.name %>*/\n'
            },
            target:{
                files: {
                    'generated/all.js': [
                        'modules/*.js'                    ]
                }
            }
        },
        watch:{
            options:{
                livereload: true,
                spawn: false
            },
            js:{
                files: ['modules/*.js'],
                tasks: ['uglify']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['uglify']);
};

