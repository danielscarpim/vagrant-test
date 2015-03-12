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
                    skinDir + 'scss/{,*/}*.scss'
                ],
                tasks: ['compass']
            }
        },
        
    });
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', [
        'compass',
    ]);
};