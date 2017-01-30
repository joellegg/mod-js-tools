module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true,
        outputStyle: 'compressed'
      },
      dist: {
        files: {
          'styles/main.css': 'styles/main.scss'
        }
      },
    },
    watch: {
      sass: {
        files: ['**/*.scss'],
        tasks: ['sass'],
      },
    },
    jshint: {
      all: ['main.js']
    },
  });

  // Load the Grunt plugin that provides the "sass" task.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'jshint']);
};
