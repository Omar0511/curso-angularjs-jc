module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            all: ['js/*.js']  // Lint todos los archivos .js en la carpeta "js"
        },
        concat: {
            dist: {
                src: ['js/11.script.js', 'js/11.script2.js'],  // Archivos fuente en "js"
                dest: 'unidos.js'  // Genera "unidos.js" en la raíz
            }
        },
        uglify: {
            dist: {
                src: 'unidos.js',  // Toma el archivo "unidos.js" de la raíz
                dest: 'build/unidos.min.js'  // Coloca el archivo minificado en "build/"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['jshint', 'concat', 'uglify']);
};
