module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            all: ['js/11.script.js', 'js/11.script2.js']
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
        },
        shell: {
            multiplie: {
                command: [
                    'if exist unidos.js del unidos.js',  // Elimina unidos.js si ya existe
                    'if not exist deploy mkdir deploy',  // Crea deploy si no existe
                    'move build/unidos.min.js deploy/unidos.min.js'  // Mueve el archivo al directorio deploy
                ].join(' && ')
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'shell']);
};
