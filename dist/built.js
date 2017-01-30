var listLink = $("#link-list");
var listView = $("#list-view");
let bologna = {};

listLink.click(function(event) {
    event.preventDefault();

    listView.addClass("visible");
    listView.removeClass("hidden");
});

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
      concat: {
        files: ['**/*.js'],
        tasks: ['concat'],
      },
      jshint: {
        files: ['**/*.js'],
        tasks: ['jshint'],
      },
    },
    jshint: {
      beforeconcat: ['main.js', 'Gruntfile.js'],
      afterconcat: ['dist/built.js'],
      options: {
        "esversion": 6,
      }
    },
    concat: {
      options: {
        separator: '\n',
      },
      dist: {
        src: ['main.js', 'Gruntfile.js'],
        dest: 'dist/built.js',
      },
    },
  });

  // Load the Grunt plugin that provides the "sass" task.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'concat', 'jshint', 'watch']);
};
