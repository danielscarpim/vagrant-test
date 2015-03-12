module.exports = function(grunt) {
    var skinDir = 'store/skin/frontend/my-theme/default/';
    var appDir = 'store/app/design/frontend/my-theme/default/';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        compass: {
            dist: {
                options: {
                    sassDir: skinDir + 'scss',
                    cssDir: skinDir + 'css',
                    environment: 'development',
                    outputStyle: 'nested'
                }
            }
        },

        watch: {
            options: {
                livereload: true
            },
            livereload: {
                files: [
                    appDir + '**/*.{phtml,xml}',
                    skinDir + 'scss/{,*/}*.scss',
                    skinDir + 'js/{,*/}*.js'
                ],
                tasks: [
                    'compass',
                    'jshint'
                ]
            }
        },

        jshint: {
            all: [
                'Gruntfile.js',
                skinDir + ['js/{,*/}*.js', '!js/{,*/}*.min.js']
            ]
        },

        uglify: {
            dist: {
                options: {
                    mangle: false
                },
                files: {
                    'store/skin/frontend/my-theme/default/js/scripts.min.js': [skinDir + 'js/scripts.js']
                }
            }
        },

    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', [
        'compass',
        'jshint',
        'uglify'
    ]);

};