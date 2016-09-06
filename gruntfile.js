module.exports = function (grunt) {

    grunt.initConfig({

        paths: {
            sass: './style/sass',
            css: './style/css',


        },
        
        sass: {
            css: {
                options: {
                    style: 'compressed',
                    compass: true
                },
                files: [
                    {
                        expand: true,
                        cwd: '<%= paths.sass %>',
                        src: '**/*.scss',
                        dest: '<%= paths.css %>',
                        ext: '.css',
                    }
                ],
            },
        },
        watch: {
          files: ['<%= paths.sass %>'],
          tasks: ['sass']
        }
        
    });

// Plugin loading
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');


// Task definition
    grunt.registerTask('compile', ['sass']);
};